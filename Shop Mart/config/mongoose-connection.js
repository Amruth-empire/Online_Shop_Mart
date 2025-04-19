const mongoose= require('mongoose');
const config =require('config');
const dgbr= require("debug")("development:mongoose");

mongoose.connect(`${config.get("MONGODB_URI")}/shopmart`) // Fixed template literal
  .then(() => dgbr("Connected to MongoDB ✅"))
  .catch(err => dgbr("Connection failed:", err));
  

module.exports=mongoose.connection;