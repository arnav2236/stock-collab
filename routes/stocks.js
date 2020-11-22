var express=require("express");
var router=express.Router({mergeParams: true});
var middleware = require("../middleware/index");
router.get("/showall",(req,res)=>{
    res.render("stocks/showall");
});



module.exports = router;