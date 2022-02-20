const users = require('../db/users');

class LoginController {
    renderLogin (req,res) {
        res.render('login');
    }

    loginByEmail (req,res) {
        const isEmail = users.some(user => user.email === req.body.email);
        if (!users.length){
            users.push({ ...req.body, id: 1 });
            res.redirect('/users');
        } else {
            if (isEmail) {
                res.redirect('/error');
                return;
            }

            users.push({ ...req.body, id: users[users.length - 1].id + 1 });
            res.redirect('/users');
        }
    }
}

module.exports = new LoginController();