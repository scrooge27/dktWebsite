const express = require('express');
const app = express();
const path = require ('path');
const exphbs = require('express-handlebars');
var parser = require('body-parser');
var mysql = require('mysql');

app.use(parser.json());

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "stocazzo",
  database: "dkt"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs'
}));

app.set('views',path.join(__dirname,"views"));
app.set("view engine","hbs");

app.use(express.static(__dirname+'/views'));
app.use(express.static('views/images'));

app.get('/', (req,res)=>{
	res.render('home');
});

app.get('/home', (req,res)=>{
	res.render('home');
});

app.get('/products', (req,res)=>{
	res.render('products');
});

app.get('/play', (req,res)=>{
	res.render('play')
});

app.get('/contacts', (req,res)=>{
	res.render('contacts')
});

app.get('/about', (req,res)=>{
	res.render('about')
});

app.post('/submit', (req,res)=>{
	var sql = `INSERT INTO customers (name, surname, address, city, email, requests, newsletter) VALUES (${con.escape(req.body.name)}, ${con.escape(req.body.surname)}, ${con.escape(req.body.address)}, ${con.escape(req.body.city)}, ${con.escape(req.body.email)}, ${con.escape(req.body.requests)}, ${con.escape(req.body.newsletter)})`;
  	con.query(sql, function (err, result) {
  	if (err) throw err;
    console.log("1 record inserted");
  });

});

app.get('/submit', (req,res)=>{
	res.render('submitted')
});

app.get('/play', (req,res)=>{
	res.render('play')
});

app.listen(3000, () => {
	console.log('The web server has started on port 3000');
});

