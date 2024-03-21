"use client";
import MensagemStatus, { Mensagem } from "@/components/MensagemStatus";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const api = axios.create({
        baseURL: "https://api-para-mqtt.vercel.app",
    });
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        api.get("/mensagens").then((response: any) => {
            console.log(response);
            setMessages(response.data);
        });
    }, []);

    return (
        <>
            <div className="flex items-center justify-center pt-8 ">
                <div className="w-8/12 h-full bg-stone-800 rounded">
                    {messages.map((msg: Mensagem) => {
                        return <MensagemStatus mensagem={msg}></MensagemStatus>;
                    })}
                </div>
            </div>
        </>
    );
}
