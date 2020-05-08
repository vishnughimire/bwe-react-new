const mongoose = require ('mongoose');
const Schema =mongoose.Schema;


const rentalSchema = new Schema({
    title: {type: String, required: true, maxlength: [128, 'Invalid lenght! Maximum Character is 128']},
    city: {type: String, required: true, lowercase: true},
    street: {type: String, lowercase: true, required: true, minlength: [4, 'Invalid lenght! Minimum Character is 4']},
    category: {type: String, required: true, lowercase: true},
    image: {type: String, required: true},
    numOfRooms: {type: Number, required: true },
    description: {type: String, required: true },
    dailyPrice: {type: Number, required: true },
    shared: Boolean,
    createdAt: {type: Date, default: Date.now}

})

// available on instance
// rentalSchema.methods.sendError = function(res, config){
//     const {status, detail} =config;
//     return res
//     .status(status)
//     .send({errors: [{title: 'Rental Error!', detail}]})
// }


rentalSchema.statics.sendError = function(res, config){
    const {status, detail} =config;
    return res
    .status(status)
    .send({errors: [{title: 'Rental Error!', detail}]})
}

module.exports = mongoose.model('Rental', rentalSchema);
