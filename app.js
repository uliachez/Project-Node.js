const express = require('express');

const app = express();
const PORT = 3000;

app.get('/about', (req, res) => {
    res.send("Это простое приложение на Express.js");
});

let counter = 0;
app.get('/', (req, res, next) => {
    counter = counter + 1;
    if (counter == 1) {
        res.redirect('/index.html');
    } else {
        res.send('Hello, world!');
    }
});

app.use(express.static('public'));

app.use((req, res) => {
    res.status(404).send("Страница не найдена");
});

app.listen(3000, (error) => {
    if(!error)
        console.log("Server is successfully running and app is listening on port "+ PORT)
    else
        console.log("Server can't start ", error);
    }
);
