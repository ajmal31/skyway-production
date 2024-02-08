import mongoose from "mongoose"
const connection=(config)=>{

   

    // mongoose.connect(config.mongo_uri)
    mongoose.connect("mongodb+srv://ajmalmuhammed846:ajuZ3216@cluster0.uzyffxb.mongodb.net/skyway-venture-srv?retryWrites=true&w=majority")
 
    mongoose.connection.once("open",()=>{

        console.log('mongodb connection success 🐶🦴')

    })
    mongoose.connection.on('error',(err)=>{
        console.log('error occured while connecting mongodb ',err)
    })
    
    

}
export default connection