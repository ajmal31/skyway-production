import dotenv from "dotenv"
dotenv.config()

export default{

    AWS_ACCESSKEY:process.env.AWS_ACCESSKEY,
    AWS_SECRETKEY:process.env.AWS_SECRETKEY,
    JWT_SECRETKEY:process.env.JWT_SECRETKEY ?? "ajmal123venture-srv" ,
    MONGO_URI:process.env.MONGO_URI ?? "mongodb+srv://ajmalmuhammed846:ajuZ3216@cluster0.uzyffxb.mongodb.net/skyway-venture-srv?retryWrites=true&w=majority" ,
    APPLICATION_PORT:process.env.APPLICATION_PORT?? 3001,
    JWT_ADMIN_SECRET_KEY:process.env.JWT_ADMIN_SECRET_KEY ?? "ajmal123admin-srv",
    JWT_USER_SECRET_KEY:process.env.JWT_USER_SECRET_KEY ?? "ajmal123user-srv" ,


}