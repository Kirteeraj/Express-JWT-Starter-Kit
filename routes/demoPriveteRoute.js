const router = require('express').Router();
const verify = require('../middlewares/verifyToken');

router.get('/',verify,(req,res)=>{
    res.json({data:{
        message:"you have aceccsed private data",
        user: req.user
    }});
});

module.exports = router 