const path = require('path');
const fs = require('fs');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
//    в вас вийде невеликий callback hell, пізніше я вам покажу
//    як можна це обійти, але поки зробіть так
//
// fs.readFile(path.join(__dirname,'files','test1.txt'),(err,data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     fs.appendFile(path.join(__dirname,'files','test2.txt'),data,(err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// })

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
//    Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
//    старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// fs.readFile(path.join(__dirname,'files','test3.txt'),(err,data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     fs.writeFile(path.join(__dirname,'public','newTest.txt'),data,(err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//
//         fs.unlink(path.join(__dirname,'files','test3.txt'),(err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     })
// })

