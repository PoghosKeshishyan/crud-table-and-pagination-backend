const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const usersRouter = require('./routers/users.js');
const url = 'mongodb+srv://poghos877:poghos2000@cluster0.xwzomcc.mongodb.net/?retryWrites=true&w=majority'

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(url).then(() => console.log('DB ok'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}...`);
})