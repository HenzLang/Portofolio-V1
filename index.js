require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home | Mahen' });
});

// Command dibawah ini untuk "npm start" & atau di local dulu
app.listen(port, (req, res) => {
    console.log(`Server Running di http://localhost:${port}`)
})

// Command dibawah ini untuk hosting di vercel
// module.exports = app;
// module.exports.handler = serverless(app);