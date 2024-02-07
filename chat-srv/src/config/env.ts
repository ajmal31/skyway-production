import env from "dotenv"
env.config()
export default {

    PORT:process.env.PORT ?? 5003,
    MONGO_URI:process.env.MONGO_URI ?? "mongodb+srv://ajmalmuhammed846:ajuZ3216@cluster0.uzyffxb.mongodb.net/skyway-chat-srv?retryWrites=true&w=majority" ,
    USER_SRV_TOKEN_SECRET_KEY:process.env.USER_SRV_TOKEN_SECRET_KEY ?? "ajmal123user-srv" ,
    VENTURE_SRV_TOKEN_SECRET_KEY:process.env.VENTURE_SRV_TOKEN_SECRET_KEY ?? "ajmal123venture-srv" ,

    

}