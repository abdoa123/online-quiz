describe('GET /quiz', function() {
    it('returns a list of quiz', function(done) {
        request.get('/quiz')
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.have.lengthOf(2);
                done(err);
            });
    });
});

describe('POST /quiz', function() {
    it('add a new quiz', function(done) {
        request.post('/quiz')
            .send({
                title: 'run',
                done: false
            })
            .expect(201)
            .end(function(err, res) {
                done(err);
            });
    });
});
