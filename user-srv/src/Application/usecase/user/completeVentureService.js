const completeVentureService=async(dbRepo,vid,uid)=>{

    const data={
        key:'service_complete_by',
        val:new Date()
    }
    const response=await dbRepo.ventureService(vid,uid,data)
    return response

}

export default completeVentureService