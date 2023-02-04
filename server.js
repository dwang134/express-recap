const express = require('express');

const app = express();

//serves all the HTML files from the public folder
app.use(express.static('public'));

app.set('view engine', 'ejs');
//boiler plate and allows us access info coming from forms
app.use(express.urlencoded({extended: true}));
// app.use(logger);

//path specific middleware with logger
app.get('/', (req, res)=> {
    res.render('index', {text: 'World'});
})

/*
app.get('/', (req, res)=> {

    //status
    res.status(500);
    // //response to send back
    res.send('Hi');
    // //sending back status and response
    res.sendStatus(500).send("Hi");
    // //sending back json
    res.status(500).json({message: 'Error'});
    // //send down file to download 
    res.download('server.js');
    //rendering a file(HTML most of the time)
    //need a view engine for it to work (EJS or pubs)
    res.render('index', {text123: 'World'});
})

*/

const userRouter= require('./routes/users')

app.use('/users', userRouter);

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000);

