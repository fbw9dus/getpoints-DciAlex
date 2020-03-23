const mongoose = require('mongoose');
const {Schema} = mongoose

const PatientSchema = new Schema({

    name:{ 
        type:String,
        required: true
    },
    positive:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Patient", PatientSchema);

