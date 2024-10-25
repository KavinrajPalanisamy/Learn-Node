const mongoose = require('mongoose');

const connectDb = async()=>{
 try {
    const connect = await mongoose.connect(process.env.MONG_URL);
    console.log("connected to mongoose in host : ", connect.connection.host, connect.connection.name);
   //  console.log("state=>", connect.Collection);
   await mongoose.connection.on("open",()=>{
      console.log('MongoDB database connection established successfully')

   })
   // await mongoose.connection.once('open', function () {
   //  })
 } catch (error) {
    console.log(error);
    process.exit(1);
    
 }
 
}

module.exports = connectDb;