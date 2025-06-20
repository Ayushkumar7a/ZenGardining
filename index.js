const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/index.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/home.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/contact.html'))
})
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/blog.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login.html'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/signup.html'))
})

app.listen(81, () => {
    console.log("App is listening at port 81");
})