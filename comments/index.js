const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
app.use(bodyParser.json());

const commentById = {};

app.get('/posts/:id/comments', (req, res) =>{
   
});

app.post('/posts/:id/comments', (req, res) =>{
   
});

app.listen(40001, () => {
    console.log('listening on port 40001');
});