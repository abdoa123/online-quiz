const express = require('express');
const bodyParser = require('body-parser');
const Post = require('../model/quiz.js')
const router = express();

router.use(bodyParser.json());

var data = {
    field: 'CS',
    size: 2, 
    question: ['what\'s your name? ', 'what\'s your age? ', 'How are you ?'], 
    choices: [['Ehab', 'Magdy', 'Abd El-Rahman'], ['20', '19', '21'], ['Fine', 'Good', 'Upset']], 
    answer: ["Ehab", "21", "Good"]
};
/*function calcScore(req,res){
    var score = 0;
   
      // console.log(data1)
        for (var i = 0; i < 2; i++) {
            console.log('user answer: ' + req.body.yourAnswer[i]);
            console.log("correct answer: " +res[i].answer);
            if (data.answer[i] == req.body[i]) {
                score++;
            }
        }

}*/
router.get('/:id', (req, res) => {
    Post
    .find({_id : req.params.id})
    .then((posts) => {
      //  res.json(posts[0].answer)
        var score = 0;
        for (var i = 0; i < 2; i++) {
            console.log('user answer: ' + req.body.yourAnswer[i]);
            console.log("correct answer: " +posts[0].answer[i]);
            if (req.body.yourAnswer[i] == posts[0].answer[i]) {
                score++;
            }
        }
        res.json(score);
    })
    .catch(err => {
        console.log(err)
    })
})


router.post('/add', (req, res) => { 
    
    if (!req.body) return res.send(404);
    
  
    console.log(req.body)
    const add_quiz = new Post(
        {
            size: 3,
            field: req.body.field,
            question: req.body.question,
            choices: req.body.choices,
            answer: req.body.answer
        }
    )

    add_quiz.save(function(err, x){
        if(err) console.error(err)
        else{
            console.log(add_quiz);
            res.json(add_quiz);
        }
    })

    console.log("finalData.length = ", add_quiz.size);
})
    

 router.delete('/:id',(req,res)=>{
    Post
    .deleteOne({ _id: req.params.id })
    .exec().then(post=>{
        res.status(200).json(post)
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
}
)



module.exports = router;