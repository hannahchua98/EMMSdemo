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
const formRoute     = require('./routes/form');
const empLogsRoute  = require('./routes/employee-logs');

app.use('/', formRoute);
app.use('/employee-logs', empLogsRoute);


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
mongoose.connect(dbURI, 
    {useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb database connection established succesfully');
})

//listening to server
app.listen(port, () => {
    console.log(`listening to: ${port}`);
});