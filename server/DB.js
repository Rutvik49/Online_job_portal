const mongoose=require('mongoose')

const connectToMongo = async () =>{
    await mongoose.connect(process.env.mongoURI,()=>{
        console.log("Database connected successfully");
    })
}
module.exports=connectToMongo