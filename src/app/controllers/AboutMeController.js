class AboutMeController {
    index(req,res){
        res.render('about-me')
    }
}

module.exports = new AboutMeController()