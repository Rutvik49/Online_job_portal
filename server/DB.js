const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/clgProject"
const mongoURI="mongodb+srv://Cricking:rutvikDB@cluster0.anb0ylt.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = async () =>{
    await mongoose.connect(mongoURI,()=>{
        console.log("Database connected successfully");
    })
}
module.exports=connectToMongo