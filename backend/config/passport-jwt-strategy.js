const User = require('../models/user');

const passport = require('passport');
const passportJWT = require('passport-jwt').Strategy;
const extractJWT = require('passport-jwt').ExtractJwt;

let options = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'a96i36y'
}

passport.use(new passportJWT(options,  function(jwtPayload, done){
    User.findById(jwtPayload._id, function(err, user){
        if(err){
            console.log("Error ocurred in jwt authentication: ", err);
            return (err, null);
        }
        if(user){
            return done(null, user);
        }
        else{
            console.log("No such user exists!")
            return done(null, flase);
        }
    });
}));