const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')



// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/subscribers",{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
const port =3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
