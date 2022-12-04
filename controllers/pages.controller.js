
exports.getHomePage = (req, res) => {
    res.render('app/dashboard', {
        title : "App - Dashboard"
    });
}

exports.getLoginPage = (req, res) => {
    res.render('auth/login', {
        title : "App - Login"
    });
}