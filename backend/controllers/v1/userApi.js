const User = require('../../models/user');

module.exports.signUp = async function(req, res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    return res.status(200).json({
        message: "API is working fine!!"
    })
}
