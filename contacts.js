const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5004;

connectDb();
const app = express();

// app.get('/api/contacts', (req, res) =>{
//     res.send("Get all contacts");
// });
// to make use of req.body
app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoute'));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`server listening to port ${port}`); 
});
