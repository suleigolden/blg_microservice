import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get('/posts', (req,res) =>{
    res.send(posts);
});

app.post('/events', (req,res) =>{
    const {type, data} = req.body;

    if(type === "PostCreated"){ //Check if event is new post created
        const {id, title } = data;
        posts[id] = {id, title, comments: []};
    }
    if(type === "CommentCreated"){//Check if event is new comment created
        const {id, content, postId, status} = data;

        const post = posts[postId];
        post.comments.push({id, content, status}); 
    }
    if(type === "CommentUpdated"){ //Check if event is comment update
        const {id, content, postId, status} = data;
        const post = posts[postId];
        const comment = post.comments.find(comment =>{
            return comment.id === id;
        });

        comment.status = status;
        comment.content = content;

    }

    
    res.send({});
});

app.listen(4002, ()=>{
    console.log('Listeni on port 4002');
});