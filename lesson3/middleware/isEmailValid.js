const users = require("../db/users");

function isEmailValid (req,res,next) {
    try {
        const { email } = req.body;
        const filteredUser = users.filter(user => user.email.includes(email));

        if (filteredUser[0]) {
            throw new Error('This email is busy!')
        }

        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isEmailValid;