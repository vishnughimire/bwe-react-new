const Rental = require('../models/rental');

exports.getRentals = (req, res)=> {
        Rental.find({}, (error, foundRentals) => {
          // find data from mongo db using this function  find {} = find without and condition which will retrive all info
          // error = if any error is recieve from database 
          // foundRentals = data from mongodb 
          // req = request res = response 

          if (error) { return res.mongoError(error);} // return error from middlewares foder index.js  tht we catch from db
          
        
          return res.json(foundRentals);
          // above function return data that is found in the mongo db
       })
}

exports.getRentalById = (req, res)=> {
         // find data from mongo db using find by ID 
          // error = if any error is recieve from database 
          // foundRentals = data from mongodb 
    const {rentalId} = req.params;
    Rental.findById (rentalId, (error, foundRental) => {
      if (error) { return res.mongoError(error);} // return error from middlewares foder index.js  tht we catch from db
      
    
      return res.json(foundRental)
    })
}

exports.createRental = (req,res) => {
    const rentalData = req.body;
  
Rental.create(rentalData, (error, createdRental)=> {
  if (error) { return res.mongoError(error);} // return error from middlewares foder index.js  tht we catch from db
  

  return res.json({ message: `Rental with id: ${createdRental._id} was added`});
   })
}

