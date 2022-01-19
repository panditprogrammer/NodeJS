const express = require("express")
const path = require("path")
const blogs = require("../data/blogs")

const router = express.Router();


// this is homepage 
router.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../templates/index.html"));
    res.render('home');
})

// this is /blog page 
router.get("/blog",(req,res)=>{
    // res.sendFile(path.join(__dirname,"../templates/blogHome.html"))
    res.render("blogHome",{
        blogs: blogs
    });

})

// display one clicked link of post
router.get("/blogPage/:s",(req,res)=>{

    myblog = blogs.filter((e)=>{
       return e.s == req.params.s;
    })
    // res.sendFile(path.join(__dirname,"../templates/blogShow.html"))
    res.render("blogPage",{
        title : myblog[0].title,
        content : myblog[0].content
    });


})



// export this module 
module.exports = router;