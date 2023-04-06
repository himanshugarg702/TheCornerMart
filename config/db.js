const mongoose=require('mongoose');
const colors=require('colors');
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`connected to the database ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`error to connecting with mongodb ${error}`.bgRed.white);
    }
}
module.exports=connectDB