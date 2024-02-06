const serverConfig=(server,config)=>{

    const startServer=()=>{

        server.listen(config.port,()=>{

            console.log("added message in venture-service")
            console.log(`venture Service Listening on port ${config.port}🌈🌛`)
        })

    }
    return {
        startServer
    }
    
}

export default serverConfig