const mongoose=require('mongoose')

const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("___MongoDB Atlas Connected____");
}).catch((err)=>{
    console.log(`__MngoDB Atlas Connection Failed !! ${err}__`);
})