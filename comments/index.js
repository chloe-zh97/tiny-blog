const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// {postId: 
// [
// {commentId: 'abc', content: 'good'}
// ]}
const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;
    const comments = commentsByPostId[postId];
    res.send(comments || []);

});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const postId = req.params.id;
    const { content } = req.body;
    const comments = commentsByPostId[postId] || [];
    comments.push({id: commentId, content});
    commentsByPostId[postId] = comments;
    res.status(201).send(commentsByPostId[postId]);
});


app.listen(4001, () => {
    console.log("Listening on 4001");
});