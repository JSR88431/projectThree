var authController = require('../controllers/authcontroller.js');
var passport = require('passport');

module.exports = function (app) {

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.get('/signinfailure', authController.signinfailure);
    app.get('/signinsuccess', authController.signinsuccess);

    app.post('/signup', passport.authenticate('local-signup', {

        successRedirect: '/dashboard',

        failureRedirect: '/signup'

    }

    ));

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    app.post('/signin',
        passport.authenticate('local-signin', {
            successRedirect: '/signinsuccess',

            failureRedirect: '/signinfailure',

            // successFlash: 'Welcome!',

            failureFlash: true
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
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }));

    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}
