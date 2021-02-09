const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const {
    registerUserValidation,
    loginValidation,
} = require("../helpers/validation");

//Register
router.post("/register", async (req, res) => {
    //validation
    const { error } = registerUserValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //checking if the user is already in db
    const emailExist = await User.findOne({
        email: req.body.email,
    });
    if (emailExist) return res.status(400).send("Email already exsist");

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //creat new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
    });
    try {
        const savedUser = await user.save();
        res.send({
            user: user.email,
        });
    } catch (err) {
        res.status(400).send(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    //validation
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //checking if the email is in db
    const user = await User.findOne({
        email: req.body.email,
    });
    if (!user) return res.status(400).send("Email or password is wrong");

    //checking - password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");

    //create an assign token
    const token = jwt.sign({email:user.email},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);
});

module.exports = router;
