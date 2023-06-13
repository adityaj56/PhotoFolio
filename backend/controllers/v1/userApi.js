const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports.signUp = async function(req, res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(409).json({
                message: "User already exists"
            });
        }
        else{
            let newUser = await User.create(req.body);
            return res.status(200).json({
                message: `User ${newUser.email} is created`
            });
    }
    } catch (error) {
        console.log("Error while accessing database: ", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports.createSession = async function(req, res){
    try {
        let user = await User.findOne({email: req.body.email});
        if(user && user.password == req.body.password){
            return res.status(200).json({
                message: "Login successful, here is your token keep it safe",
                token: jwt.sign(user.toJSON(),'a96i36y', {expiresIn: '1000000'})
            })
        }
        else{
            return res.status(401).json({
                message: "Username/Password wrong"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}
