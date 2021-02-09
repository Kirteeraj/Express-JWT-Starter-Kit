const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){

    //Check - token present
    //auth-token is header varibale which must conatin jwt
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denined');

    //Verifing token
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
    }catch(err){
        res.status(400).send('Invalid Token')
    }
    next();
};

module.exports = verifyToken;