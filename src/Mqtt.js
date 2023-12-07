import { useEffect, useState } from "react";
import mqtt from 'mqtt';

const MQTT = () => {
    const [msg, setMsg] = useState('')
    useEffect(() => {
        const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt')

        client.on('connect', () => {
            console.log('Connected to MQTT Broker'); 

            client.subscribe('IntroducerandeProjekt', () => {
                console.log('Subscribed to topic')
            })
        })

        client.on('message', (topic, message) => {
            console.log(`Received message: ${message.toString()} on topic: ${topic}`)
            setMsg(message.toString())
        })

        return () => {
            if (client.connected) {
                client.end();
            }
        };
    }, []);

    return <div>{msg} °C</div>
}

export default MQTT;