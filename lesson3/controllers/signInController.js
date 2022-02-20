const users = require('../db/users');

class SignInController {
    renderSignIn (req,res) {
        res.render('signIn');
    }

    signInByEmailAndPassword (req,res) {
        const { email,password } = req.body;
        const filteredUser = users.filter(user => user.email.includes(email) && user.password.includes(password));
        const userId = filteredUser[0]?.id;
        if (filteredUser.length) {
            res.redirect(`/users/${userId}`)
        } else {
            res.redirect('/error');
        }
    }
}

module.exports = new SignInController();