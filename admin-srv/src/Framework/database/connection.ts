import mongoose from 'mongoose'
const connection = (uri: string) => {

   //connecting mongodb 
   mongoose.connect("mongodb+srv://ajmalmuhammed846:ajuZ3216@cluster0.uzyffxb.mongodb.net/skyway-admin-srv?retryWrites=true&w=majority")
   //   mongoose.connect(uri)

   mongoose.connection.once('open', () => {

      console.log('Admin Service  Mongodb connection Succesfull👽👻')
   })

   mongoose.connection.on('error', (err) => {

      console.log('Error Occured While Connection Database Mongodb', err)

   })



}

export default connection