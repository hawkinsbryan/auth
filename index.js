const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//IMPORT ROUTES
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
//CONNECT TO DB
// CLEAR DEPRECATION WARNINGS
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect( 
    process.env.DB_CONNECTION, 
    () => { console.log("connected to db")}).catch(err => console.log(err)
);

//MIDDLEWARE
app.use(express.json());

//ROUTE MIDDLEWARES
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3030, () => console.log('server listening on port 3030'));