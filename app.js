const express   = require('express');
const bodPar    = require('body-parser');
const mongoose  = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

//middleware -----
//view engine 
app.set('view engine','pug');
app.use(bodPar.urlencoded({extended: true}));   // parse application/x-www-form-urlencoded
app.use(bodPar.json());                         // parse application to json

//routing -----
//get req
const formRoute = require('./routes/form');
app.use('/', formRoute);


/*
app.get('/', (req,res) => {
    return res.redirect('form-get');
});

app.get('/form-post', (req,res) => {
    return res.render('form-post');
});

app.get('/submit-get', (req,res) =>{
    return res.send(req.query.first);
});


*/
//db connection
const dbURI = process.env.CONN;
const connection = mongoose.connect(dbURI, 
    {useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true}
);

connection
    .then(console.log('succesfully connected to db'))
    .catch((err) => console.error(err))

//listening to server
app.listen(port, () => {
    console.log(`listening to: ${port}`);
});