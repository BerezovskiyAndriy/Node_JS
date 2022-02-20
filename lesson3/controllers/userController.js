const users = require('../db/users');

class UserController {
    renderUsers (req,res) {
        const {age,city} = req.query;
        let filteredArray = [...users];

        if (age) {
            filteredArray = filteredArray.filter(user => +user.age === +age);
        }

        if (city) {
            filteredArray = filteredArray.filter(user => user.city === city);
        }

        res.render('users', { filteredArray });
    }

    getUsersById (req,res) {
        const { userId } = req.params;
        const user = users.filter(user => user.id === +userId);
        if (!user) {
            res.redirect('/error');
            return;
        }

        res.render('userInfo', { user });
    }
}

module.exports = new UserController();