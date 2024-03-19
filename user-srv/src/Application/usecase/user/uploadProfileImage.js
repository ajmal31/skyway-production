import { uploadFile } from "../../../s3/index.js"
import publisher from "../../../Message-broker/publisher/publisher.js"
const uploadProfileImage=async(dbRepo,file,uid)=>{

    const bucketName="skyway.innovative"
    const folderName="user-profile-images"
    
    const result=await uploadFile([file],bucketName,folderName)
    const key="profile_image"
    const value=result[0]
    const verifyingKey="_id"
    const verifyingValue=uid
    const response=await dbRepo.uploadProfileImage(key,value,verifyingKey,verifyingValue)
    const foreign="CHAT-SRV"
    const data={
        method:"update-profile",
        value
    }
    let k=publisher(foreign,data)

    return response

}

export default uploadProfileImage