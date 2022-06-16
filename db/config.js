const mongoose =require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{
    console.log("connection done")
}).catch((e)=>{
    console.log(e)
})