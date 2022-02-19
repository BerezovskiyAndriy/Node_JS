const users = require("../db/users");

class UserController {
    renderUsers (req,res) {
        res.render('users', { users })
    }

    getUsersById (req,res) {
        const { userId } = req.params;
        const user = users.filter(user => user.id === +userId);
        if (!user) {
            res.redirect('/error');
            return;
        }

        res.render('userInfo', { user })
    }
}

module.exports = new UserController();