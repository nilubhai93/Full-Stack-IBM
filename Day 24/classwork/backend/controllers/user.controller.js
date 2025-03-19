const {userModel} = require('../models/user.models');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    const {userName, email, password} = req.body;

    try{
        bcrypt.hash(password, 5/*saltRounds= like how complex want to create*/, async (err, hash)=> {
            if(err){
                return res.status(400).send({error: err.message});
            }else{
                const userData = new userModel({userName, email, password: hash});
                await userData.save();

                return res.status(200).send({message:"User created successfully", user: userData});
            }
        });
    }
    catch(err){
        res.status(400).send({error: err.message});
    }
};

const login = (req, res) => {
    const {email, password} = req.body;
};

const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
res.json({user:user, token: token});

module.exports = {
    signUp,login
};