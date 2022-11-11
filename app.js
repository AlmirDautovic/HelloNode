const express = require("express");
const ejsMate = require('ejs-mate');
const path = require('path');


const app = express();

app.use('/PicturesLogo', express.static('PicturesLogo'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
// app.use((req, res) => {
//     res.send("TEST, HELLO WORLD!!!!");
// })

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.send("This is a Home Page!");
});

app.listen(3000, () => {
    console.log("serving on port 3000!");
});
