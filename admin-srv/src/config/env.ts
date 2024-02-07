import dotenv from "dotenv"
dotenv.config()
export default{

    MONGO_URI:process.env.ADMIN_DATABASE_URL as string
}