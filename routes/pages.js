var express=require('express');
var router=express.Router();

//Test app
router.get('/',function(req,res){
    //res.send("Working");
    res.render('index',{ 
        title: 'Home'
    });
});


//Export the router
module.exports = router