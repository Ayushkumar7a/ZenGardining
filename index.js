const express = require('express');
const path = require('path');
const app = express();

// Serve frontend directory statically at root level and /frontend prefix
app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/frontend', express.static(path.join(__dirname, 'frontend')));

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
    res.sendFile(path.join(__dirname, 'frontend/blogs.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/login.html'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/signup.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/about.html'))
})
app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/privacy.html'))
})
app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/terms.html'))
})
app.get('/enroll', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/enroll.html'))
})
app.get('/rose-course', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/rose-course.html'))
})
app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/forgot-password.html'))
})
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/admin.html'))
})
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/shop.html'))
})

app.listen(81, () => {
    console.log("App is listening at port 81");
})