const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const http = require('http');
const app = express();
const port = process.env.PORT || '3000'

const router = require('./routing/router')

app.set('port', port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', router.config())

const server = http.createServer(app);

server.on('error', function(error) {
    return new Error('Server error', error)
});
server.on('listening', function() {
    console.log('listening')
    console.log('opening connection to db')

    mongoose.set('debug', true)
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);

    mongoose.connect(process.env.MONGODBURL)
    
    const db = mongoose.connection
    db.on('error', function(error) {
        return new Error('DB connection error', error)
    });
    db.once('open', function () {
        console.log('connected to db')
        console.log('ready')
    });
});

server.listen(port);