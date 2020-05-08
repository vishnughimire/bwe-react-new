// // install nodejs server or express framework from terminal 
// // node express is used to connect between db and application.  It is also called API server , node express server 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const { provideErrorHandler } = require ('./Middlewares'); // see index.js in middlewares folder of db error handler 

// routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');
const { onlyAuthUser } = require('./controllers/users'); // see this function in users.js in controller folder 

// models
require('./models/rental');
require('./models/user');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Connected to DB!')
});

// Middleware
app.use(bodyParser.json())
app.use (provideErrorHandler);  // see db error handler in middlewares folder (index.js)

// below is for authentecated user,  the end point below '.api/v1/secret' is accessable to authentecated user only 
app.get('/api/v1/secret', onlyAuthUser, (req, res) => {
  const user = res.locals.user   // res.local.user is comging from token verified from unsers.js 
  return res.json({message: `Super secret message to: ${user.username}`})
})


// Api Routes
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})

