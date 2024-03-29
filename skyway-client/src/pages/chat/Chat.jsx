import ChatSideBar from "../../components/chat/ChatSideBar"
import ChatContent from "../../components/chat/ChatContent"
import { useDispatch } from "react-redux"
import { fetchData } from "../../redux/api/api"
import { USER_SRV_BASE_URL} from "../../data/const"
import { useEffect, useState } from "react"

import { useSocket } from "../../hooks/useSocket"
const Chat = ({ roll="user" }) => {

    let socket=useSocket()
    console.log("what about socket.io configration",socket)
    const dispatch = useDispatch()
    const [allchats, setAllchats] = useState([])
    const fetchAllChats = async () => {

        //all connected Venture for chat list 
        const apiDetails = {
            method: 'get',
            url: USER_SRV_BASE_URL + 'getAllConnectedVentures',
            data: null,
            token: true,
            to: 'user'
        }
        const apiDetails_two = {
            method: 'get',
            url: USER_SRV_BASE_URL + 'getAllGenuineUsers',
            data: null,
            token: true,
            to: 'venture'

        }
        if (roll !== "venture") {
            const response = await dispatch(fetchData(apiDetails))
            
            setAllchats(response?.payload?.data?.response)

        }else {
            const response=await dispatch(fetchData(apiDetails_two))
            setAllchats(response?.payload?.data?.response)
            
        }


    }
    

    
        useEffect(() => {

            fetchAllChats()

        }, [])

            socket &&socket.on('notification', (data) => {
                console.log('notification even in chat page',data)
                
               
        
        
            })
    
           socket&& socket.on('received', (data) => {
                console.log('message received in chat page  ', roll)
                
                
        
        
            })

        
    return socket&& (

        
        <div className=" bg-primary px-16 py-10 h-screen flex gap-3 " >

        
            <ChatSideBar chats={allchats} roll={roll} socket={socket} />
            <ChatContent roll={roll} socket={socket} />

        </div>
    )


}

export default Chat