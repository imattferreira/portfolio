require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app
    .set('port', process.env.PORT || 5000)
    .use(express.static('public'))
    .set('views', path.join(__dirname, '/views'))
    .set('view engine', 'ejs')

    .get('/', (req, res) => {
        return res.render('index.ejs');
    })
    .get('/redirect-github', (req, res) => {
        return res.render('redirect-github.ejs');
    })
    .get('/redirect-linkedin', (req, res) => {
        return res.render('redirect-linkedin.ejs');
    })
    .get('/redirect-email', (req, res) => {
        return res.render('redirect-email.ejs');
    });

app.listen(app.get('port'), () => {
    console.log('the server is running 🚀');
});
