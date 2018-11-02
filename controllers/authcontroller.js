var exports = module.exports = {}
 
// exports.signup = function(req, res) {
 
//     res.redirect('/Signup');
 
// }

// exports.signupsuccess = function(req, res) {
 
//     res.json(true);
 
// }

// exports.signupfailure = function(req, res) {
 
//     res.json(true);
 
// }

exports.signin = function(req, res) {
 
    res.json('this should be the signin');
 
}

exports.signinfailure = function(req, res) {
 
    res.json('Incorrect username or password.');
 
}

exports.signinsuccess = function(req, res) {
 
    res.json('Logged in!');
 
}

exports.dashboard = function(req, res) {
 
    res.json('this should be the dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}