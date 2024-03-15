import mqtt from "mqtt";

const clientId = "client"+ Math.random().toString(36).substring(7)

const options: mqtt.IClientOptions = {
    keepalive: 60,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000
}

const hostUrl = "mqtt://broker.mqttdashboard.com:1883"
const client = mqtt.connect(hostUrl, options);

export default client