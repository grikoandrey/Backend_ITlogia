// console.log('Hello World!');
// console.log(__dirname);
// console.log(process);

// const fs = require('fs');
// const getRates = require('./rates');

// fs.readFile('./text.txt', (err, data) => {
//     console.log(data.toString());
// });

// console.log(getRates());

//--------Создание веб сервера-----------------
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    let fileName = 'index';
    switch (req.url) {
        case '/about':
            fileName = 'about';
            // res.write('<h1>About Me!</h1>');
            break;
        case '/contact':
            fileName = 'contact';
            // res.write('<h1>Contact Me!</h1>');
            break;
        case '/service':
            fileName = 'service';
            // res.write('<h1>Service Me!</h1>');
            break;
        // default:
        //     res.write('<h1>Main page!</h1>')
    }
    fs.readFile(`./views/${fileName}.html`, 'utf8', (err, data) => {
        res.write(data);
        res.end();
    })


})

server.listen(process.argv[2], () => {
    console.log(`Server started on port ${process.argv[2]}`);
});