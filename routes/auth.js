var authController = require('../controllers/authcontroller.js');
var passport = require('passport');

module.exports = function (app) {

    app.get('/signupsuccess', function(req, res) {
        res.json(true)
    });

    app.get('/signupfail', function(req, res) {
        res.json(false)
    });

    app.get('/signinsuccess', function(req, res) {
        res.json(true)
    });

    app.get('/signinfailure', function(req, res) {
        res.json(false)
    });

    app.post('/signup', passport.authenticate('local-signup', {

        successRedirect: '/signupsuccess',

        failureRedirect: '/signupfail',
        
        failureFlash : true

    }

    ));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    app.post('/signin',
        passport.authenticate('local-signin', {
            successRedirect: '/signinsuccess',

            failureRedirect: '/signinfailure'
        }),
        function (req, res) {
            console.log(req.body, "req.body")
        });

    // Redirect the user to Facebook for authentication.  When complete,
    // Facebook will redirect the user back to the application at
    //     /auth/facebook/callback
    app.get('/auth/facebook', passport.authenticate('facebook'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/forum',
            failureRedirect: '/Login'
        }));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/Login');

    }

}
