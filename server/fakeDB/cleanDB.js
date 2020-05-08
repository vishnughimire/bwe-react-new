const mongoose = require('mongoose');
const config =require('../config/dev');
const FakeDB = require ('./FakeDB');

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }, async() => {
    const fakeDb = new FakeDB();
    console.log('Starting populating Fake DB');
    await fakeDb.populate();
    await mongoose.connection.close();
    console.log ('Fake DB has been populated!');
    
  });

