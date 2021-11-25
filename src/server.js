const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views',path.resolve('src','views'));
app.use(express.static(path.resolve('src', 'public')));
app.use(express.json());
app.use(routes);

app.listen(8000,()=> console.log('🚀 Server is listening on a url','http://localhost:8000'));