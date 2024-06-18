const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.send("Это простое приложение на Express.js");
});

app.use((req, res) => {
    res.status(404).send("Страница не найдена");
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(3000, (error) => {
    if(!error)
        console.log("Server is successfully running and app is listening on port "+ PORT)
    else
        console.log("Server can't start ", error);
    }
);
