import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
app.use(bodyParser());

app.post('/event', (req,res)=>{

    const event = req.body;
    axios.post('http://localhost:4000/event',event);
    axios.post('http://localhost:4001/event',event);
    axios.post('http://localhost:4002/event',event);

    res.send({status: 'OK'});

});

app.listen(4005, ()=>{
   console.log('Listening on port 4005'); 
});