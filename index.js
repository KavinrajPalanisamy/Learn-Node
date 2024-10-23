const express = require('express');
const app = express();
const port = 4002;

app.listen(port,()=>{
    console.log(`application listening to ${port}`);
});

app.get('/', (req, res, next) => {
    // res.send("Hello World");
    res.json({ message: "Hello world" }); // to send response in JSON
});

app.get('/users', (req, res, next) => {
    res.json({ message: "Fetched all the user details" }); // to send response in JSON
});

app.get('/users/:id', (req, res, next) => {
    res.json({ message: `Fetched the requested user ${req.params.id}`}); // to send response in JSON
});

app.post('/users', (req, res, next) => {
    res.json({ message: "created user details" }); // to send response in JSON
});

app.put('/users/:id', (req, res, next) => {
    res.json({ message: `Updated user details for ${req.params.id}` }); // to send response in JSON
});

app.delete('/users/:id', (req, res, next) => {
    res.json({ message: `Removed user details ${req.params.id}` }); // to send response in JSON
});