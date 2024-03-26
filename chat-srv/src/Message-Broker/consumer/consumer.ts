import createChannel from "../config";
import { findChater } from "../../Helper/chatHelper";
import { insertChatersDetails } from "../../Helper/chatHelper";

const consumer = async () => {

    const channel = await createChannel()
    channel.consume("CHAT-SRV", async (data) => {
        if (data) {
            const message = JSON.parse(data?.content?.toString());

            //These conditon handling Venture and User data for updating chaters
            if (message?.ventureName || message?.username) {

                const existDoc = await findChater(message._id)
                //check whether Document already Exist or not
                if (existDoc) {
                    channel.ack(data)
                    return ''
                } else {
                    const response = await insertChatersDetails(message)
                    channel.ack(data)
                    return ''

                }



            } else if (message?.method === "update-profile") {
                console.log("message", message.value)
                channel.ack(data)
                return ''
            } else {
                channel.ack(data)
                return ''

            }


        }
        else console.log('chat service while consuming data not found')


    })

}

export default consumer