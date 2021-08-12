const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
app.use(bodyParser.json());

const commentById = {};

app.get('/posts/:id/comments', (req, res) =>{
   res.send(commentById[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) =>{
    const commentId = uuid.v4();
    const {content} = req.body;
    const comments = commentById[req.params.id] || [];
    
    comments.push({id:commentId, content })
    commentById[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(40001, () => {
    console.log('listening on port 40001');
});