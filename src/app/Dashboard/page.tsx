import clientService from "@/hooks/clientService"
import { Packet } from "mqtt/*"

export default function Dashboard() {
    clientService.addListenerCallback("teste", "Rodex", (topic: string, payload: any, packet: Packet) => {
        let messageJSON: string = payload.toString()
        let message = JSON.parse(messageJSON)
        console.log(message)
    })


    return (
        <>
        <div>
            <h1>Dashboard</h1>     
        </div>
        </>
    )
}