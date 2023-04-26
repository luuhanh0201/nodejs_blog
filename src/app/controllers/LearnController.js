class LearnController {

    index(req,res){
        res.render('learn')
    }
    detail(req, res) {
        res.send('Detail learn')
    }

}

module.exports = new LearnController;