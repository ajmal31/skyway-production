const serverConfig=(server,config)=>{

    const startServer=()=>{

        server.listen(config.port,()=>{

            console.log(`venture Service Listening on port ${config.port}🌈🌛`)
            console.log("venture service is started ci/cd is working fine")
        })

    }
    return {
        startServer
    }
    
}

export default serverConfig