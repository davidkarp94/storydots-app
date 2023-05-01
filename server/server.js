const express = require('express');
const mysql = require('mysql');
const { urlencoded, json } = require('express');
const conn = require('express-myconnection');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const products = require('./routes/products.js');
const users = require('./routes/users.js');

const app = express();

app.use(cors())

app.use(json());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set('port', 3000 || 9000);

const db = {
    host: 'localhost',
    port: 80,
    user: 'root',
    password: 'asd123', 
    database: 'storydots'
}

//middlewares

app.use(conn(mysql, db, 'single'));
app.use(express.json());
app.use(
    express.urlencoded({
    extended: true,
    })
);

//routes

app.get('/', (req, res) => {
    res.send('Server On')
});

app.use('/products', products);
app.use('/assets', express.static(path.join(__dirname, 'public/images')));
app.use('/users', users);

//server running

app.listen(app.get('port'), () => {
    console.log('server running on port:', app.get('port'))
});