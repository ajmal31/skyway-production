import dotenv from "dotenv"
dotenv.config()

export default{

    AWS_ACCESSKEY:process.env.AWS_ACCESSKEY ?? "AKIA4U3BZXP5VCK3DWO7" ,
    AWS_SECRETKEY:process.env.AWS_SECRETKEY?? "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",
    MONGO_URI:process.env.MONGO_URI ?? "mongodb+srv://ajmalmuhammed846:ajuZ3216@cluster0.uzyffxb.mongodb.net/skyway-user-srv?retryWrites=true&w=majority"
 

}