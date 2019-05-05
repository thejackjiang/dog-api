const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const routes = require('./routes/index')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/doggos', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mongo db: doggos')
});

app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
