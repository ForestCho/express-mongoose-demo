var mongoose = require('mongoose')  
    , Schema = mongoose.Schema  
    , ObjectId = Schema.ObjectId;  
  
var UserSchema = new Schema({  
      name: String  
    , password: String  
});  
  
module.exports = mongoose.model('User', UserSchema);  
