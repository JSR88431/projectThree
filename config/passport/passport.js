var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    passport.use('local-signup', new LocalStrategy({
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) {

            console.log(req.body)

            let email = req.body.email

            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    User.findOne({
                        where: {
                            username: username
                        }
                    }).then(function (user) {
                        if (user) {
                            return done(null, false, {
                                message: 'That username is already taken'
                            })
                        } else {
                            var userPassword = generateHash(password);
                            var data = {
                                email: email,
                                password: userPassword,
                                // firstname: firstname,
                                // lastname: lastname,
                                username: username
                            };
                            User.create(data).then(function (newUser, created) {
                                if (!newUser) {
                                    return done(null, false);
                                }
                                if (newUser) {
                                    return done(null, newUser);
                                }
                            });
                        }

                    })
                }


            });
        }
    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {
            var User = user;
            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

    var passport = require('passport')
        , FacebookStrategy = require('passport-facebook').Strategy;

    passport.use(new FacebookStrategy({
        clientID: process.env.DB_ID,
        clientSecret: process.env.DB_SECRET,
        callbackURL: "http://localhost:3001/auth/facebook/callback",
        profileFields: ['name']
    },
        function (accessToken, refreshToken, profile, done) {
            console.log(profile)
            User.findOne({
                where: {
                    facebookId: profile.id
                }
            }).then(function (user) {
                if (!user) {
                    var generateHash = function (password) {
                        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                    };
                    var userPassword = generateHash(profile.id);
                    var data = {
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        password: userPassword,
                        facebookId: profile.id
                    };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });

                } else {
                    console.log("you have a logged account")
                    done(null, user);
                }
            })
        }
    ));

}

