"use client";
import axios from "axios";
import { useEffect, useState } from "react";

type messageObject = {
    Texto: string;
};
export default function Dashboard() {
    const api = axios.create({
        baseURL: "https://api-para-mqtt.vercel.app",
    });
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api.get("/messages").then((response: any) => {
            console.log(response);
            setMessages(response.data);
        });
    }, []);

    return (
        <>
            <div>
                <h1>Dashboard</h1>
                {messages.map((obj: string, index) => {
                    return <h1 key={index}>{obj}</h1>;
                })}
            </div>
        </>
    );
}
