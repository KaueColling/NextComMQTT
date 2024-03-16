import mqtt from "mqtt";

const clientId = "client" + Math.random().toString(36).substring(7);

const options: mqtt.IClientOptions = {
    keepalive: 60,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 5000,
};

const hostUrl = "mqtt://broker.mqttdashboard.com:1883";

const client = mqtt.connect(hostUrl, options);
client.on("connect", () => {
    console.log("connected");
    client.subscribe("Rodex", (err) => {
        //subscribes
    });
});

const messages: Array<string> = [];

client.on("message", (topic, payload, packet) => {
    let messageJSON: string = payload.toString();
    let message = JSON.parse(messageJSON);
    messages.push(message.Texto);
});

function getMessages() {
    return messages;
}

export default { getMessages };
