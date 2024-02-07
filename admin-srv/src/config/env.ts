import dotenv from "dotenv"
dotenv.config()
export default{

    MONGO_URI:process.env.MONGO_URI ?? "mongodb+srv://ajmalmuhammed846:ajuZ3216@cluster0.uzyffxb.mongodb.net/skyway-admin-srv?retryWrites=true&w=majority" as string
}