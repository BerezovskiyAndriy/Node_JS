const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname,'main'),(err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname,'main','online'),{ recursive: true },(err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname,'main','inPerson'),{ recursive: true },(err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })


const onlineUsers = [{name: 'Andriy', age: 29, city: 'Lviv' }];
const inPersonUsers = [{name: 'Orest', age: 24, city: 'Kyiv' }];

fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),
    `${inPersonUsers.map(person =>
        `NAME: ${person.name} \nAGE: ${person.age} \nCITY: ${person.city}`)}`,
    (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
})

fs.writeFile(path.join(__dirname,'main','online','online.txt'),
    `${onlineUsers.map(users =>
        `NAME: ${users.name} \nAGE: ${users.age} \nCITY: ${users.city}`)}`,
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })

const helper = () => {
    if (path.join(__dirname,'main','inPerson','inPerson.txt')) {
        fs.rename(path.join(__dirname,'main','inPerson','inPerson.txt'),
            path.join(__dirname,'main','online','inPerson.txt'),(err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    }

    if (path.join(__dirname,'main','online','online.txt')) {
        fs.rename(path.join(__dirname,'main','online','online.txt'),
            path.join(__dirname,'main','inPerson','online.txt'),(err) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
            })
    }
}

helper();
