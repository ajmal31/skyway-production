const serverConfig=(server,config)=>{

    const startServer=()=>{

        server.listen(config.port,()=>{
            console.log("server starting github actions perfect")
            console.log(`user Service Listening on port ${config.port}`)
        })

    }
    return {
        startServer
    }   
}

export default serverConfig