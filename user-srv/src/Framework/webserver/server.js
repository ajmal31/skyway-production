const serverConfig=(server,config)=>{

    const startServer=()=>{

        server.listen(config.port,()=>{

            console.log(`user Service Listening on port ${config.port}`)
            console.log("server started in user-service ci/cd is working perfect")
        })

    }
    return {
        startServer
    }   
}

export default serverConfig