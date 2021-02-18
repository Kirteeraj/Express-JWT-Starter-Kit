const router = require('express').Router();
const verify = require('../middlewares/verifyToken');
const multer = require('multer');
const { profileValidation } = require('../validators/setProfileValidator');
const upload = multer({dest:'./uploads/images'});


router.post('/setprofile',verify,upload.single('image'),(req,res)=>{
    
    //valdiation 
    const { error } = profileValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    console.log(req.body);
    res.status(200).send('ok');
});

module.exports = router;