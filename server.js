const express = require('express');
const hbs = require('hbs');


const app = express();
app.set('view engine', 'handlebars');
hbs.registerPartials(__dirname + '/views/partials');

//** Middleware for public folder */
app.use(express.static(__dirname + '/public'));


const port = 3000;

app.listen(port,() =>{
    console.log('Connected to port 3000');
});

// /** routes */

// app.use((req,res,next) =>{
//     res.render('maintenance.hbs');
// });

app.get('/', (req,res) =>{
  //  res.send('Hello express');
res.render('home.hbs', {
    pagetitle: 'Home Page',
    welcome: 'Hello and welcome to the start of my app',
    currentYear: new Date().getFullYear()
})
});


app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        pagetitle: 'About Page',
        currentYr:  new Date().getFullYear()
    });
});


app.get('/bad', (req,res) =>{
    res.send({
        ErrorMessage : 'Error handling Request'
    });
})
