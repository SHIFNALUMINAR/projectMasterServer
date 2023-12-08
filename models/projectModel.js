const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    languages:{
        type:String,
        required:true
    },
    overView:{
        type:String,
        required:true

    },
    gitHub:{
        type:String,
        required:true

    },
    website:{
        type:String,
        required:true

    },
    projectImage:{
        type:String,
        required:true

    },
    userId:{
        type:String,
        required:true
    }

})

const projects=new mongoose.model('projects',projectSchema)

module.exports=projects