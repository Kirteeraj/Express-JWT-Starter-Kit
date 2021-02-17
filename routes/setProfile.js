const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const multer = require('multer');
const upload = multer({dest:'./uploads/images'});


router.post('/setprofile',verify,upload.single('image'),(req,res)=>{
    console.log(req.body,req.user,req.headers);
    res.status(200).send("ok");
});

module.exports = router;