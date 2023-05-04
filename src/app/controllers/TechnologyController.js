const Posts = require("../models/Posts")
const {multipleMongooseToObject} = require('../../util/mongoose')
class TechnologyController {
    //  /technology
    index(req, res, next) {
        Posts.find({})
            .then((posts) => {

             

                res.render('technology',{
                    posts: multipleMongooseToObject(posts)
                })
            })
            .catch(err=>next(err));
       
    }
    // /technology/:slug
    show(req, res) {
        res.send('technology detail');
    }
}

module.exports = new TechnologyController();
