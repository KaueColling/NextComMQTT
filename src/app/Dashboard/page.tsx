import client from "@/hooks/client"

export default function Dashboard() {
    client.on("connect", () => {
        client.subscribe("Rodex", (err) => {
            //subscribe
        });
    });

    client.on("message", (topic, payload, packet) => {
        let messageJSON: string = Buffer.from(payload).toString()
        let message = JSON.stringify(messageJSON)
        console.log(message)

    });

    return (
        <>
        <div>
            <h1>Dashboard</h1>     
        </div>
        </>
    )
}