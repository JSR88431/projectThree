var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.json('this should be the signup');
 
}


exports.signin = function(req, res) {
 
    res.json('this should be the signin');
 
}

exports.dashboard = function(req, res) {
 
    res.json('this should be the dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}