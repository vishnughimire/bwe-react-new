const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  username: {
    type: String,
    minlength: [4, 'Invalid length! Minimum is 4 characters'],
    maxlength: [32, 'Invalid length! Maximum is 32 characters'],
  },
  email: {
    type: String,
    minlength: [4, 'Invalid length! Minimum is 4 characters'],
    maxlength: [32, 'Invalid length! Maximum is 32 characters'],
    unique: true,
    lowercase: true,
    required: 'Email is required!',
   match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
  },
  password: {
    type: String,
    minlength: [4, 'Invalid length! Minimum is 4 characters'],
    maxlength: [32, 'Invalid length! Maximum is 32 characters'],
    required: 'Password is required!'
  }
})

// whenever user login (via login page) the below function will be executed, this is to compare the decripted password  the user password
//while saving in the database 
//bcryptjs - npm install bcryptjs framework 
// see more in users.js in Routes folder 

userSchema.methods.hasSamePassword = function(providedPassword) {
  return bcrypt.compareSync(providedPassword, this.password)
}



// whenever you save the data (via register user) the below function will be executed, this is to incript the user password
//while saving in the database 
//bcryptjs - npm install bcryptjs framework 
// see more in users.js in Routes folder 

userSchema.pre('save', function(next){
  const user =this;

   bcrypt.genSalt(10,(err, salt) => {
   bcrypt.hash(user.password, salt, (err, hash)=> {
   user.password = hash;
   next();
   })
  })
})

module.exports = mongoose.model('User', userSchema);
