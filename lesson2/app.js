const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','.hbs');
app.engine('.hbs', engine({ defaultLayout:false }));
app.set('views',path.join(__dirname,'static'));

const users = [];

app.get('/login',(req,res) => {
    res.render('login')
})

app.get('/signIn',(req,res) => {
    res.render('signIn')
})

app.get('/users',(req, res) => {
    res.render('users', { users })
})

app.get('/notFound',(req, res) => {
    res.render('notFound')
})

app.get('/error',(req, res) => {
    res.render('error')
})

app.get('/users/:userId',(req, res) => {
    const { userId } = req.params;
    const user = users.filter(user => user.id === +userId);
    if (!user) {
        res.redirect('/error');
        return;
    }

    res.render('userInfo', { user })
})


app.post('/login',(req, res) => {
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
})

app.post('/signIn',(req, res) => {
    const { email,password } = req.body;
    const filteredUser = users.filter(user => user.email.includes(email) && user.password.includes(password));
    const userId = filteredUser[0]?.id;
    if (filteredUser.length) {
        res.redirect(`/users/${userId}`)
    } else {
        res.redirect('/error');
    }
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5500,() => {
    console.log('Server has started on port 5500');
})