const express = require("express")
const path = require('path')
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
const Post = require('./model/quiz.js')

const app =express();

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Quzidb', {useNewUrlParser: true}).then(() => {
    console.log(`your database connected`)
  });

// const add_quiz = new Post(
//   {
//         size: 3,
//         field: 'asd',
//         question: ['q1', "q2"],
//         choices: [['q1c1', 'q1c2'], ['q2c1, q2c2']],
//         answer: [1, 2]
//   }
// )

// add_quiz.save(function(err, x){
//     if(err) console.error(err)
//     else{
//         console.log(x);
//         //res.json(finalData);
//     }
// })

const rotuer = require('./api_Router/quaiz.js');
app.use('/quaiz' , rotuer);
module.exports = app;   