const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {type : String , required : true , },
  lastName: {type : String , required : true},
  age: {type : Number , required : true, min : 12 , max : 100},
  gender: {type : String , required : true},
  email: {type : String , required : true},
  phone: {type : String , required : true},
  address: {
    address: {type : String , required : true},
    city: {type : String , required : true},
    postalCode: {type : String , required : true},
    state: {type : String , required : true},
  },
});

exports.User = mongoose.model("User", userSchema);
