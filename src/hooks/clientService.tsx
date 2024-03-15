import mqtt, { MqttClient } from "mqtt";

const clientId = "client"+ Math.random().toString(36).substring(7)

const options: mqtt.IClientOptions = {
    keepalive: 60,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    password: "123",
    username: "Daniel"
}

const hostUrl = "mqtt://broker.mqttdashboard.com:1883"

type callbackObject = {
    [callbackName: string]: (...args: any) => void
}

type Topics = {
    [topic: string]: callbackObject
}
const topics: Topics = {}
function addListenerCallback(name: string, topic: string, callback: (...args: any) => void) {
    if (topics[topic] == undefined) {
        topics[topic] = {}
    }

    let listenersObject = topics[topic]

    if (listenersObject[name] == undefined) {
        listenersObject[name] = callback
    }
}


function triggerListenerCallback(topic: string, ...args: any) {
    if (topics[topic] == undefined) {
        topics[topic] = {}
    }

    let listenersObject: callbackObject = topics[topic]
    console.log(listenersObject)
    for (const key in listenersObject) {
        listenersObject[key](topic, ...args)
    }
}

let binded = false
const client = mqtt.connect(hostUrl, options )
_bindListeners()

function _bindListeners() {
    if (binded) {
        return
    }

    binded = true
    client.on("connect", () => {
        client.subscribe("Rodex", (err) => {
            //subscribes
        });
    });
    
    client.on("message", (topic: string, ...args: any) => {
        console.log(topic)
        triggerListenerCallback(topic, ... args)
    })
    
}


function getClient() {

    return client
}

export default {getClient, addListenerCallback}