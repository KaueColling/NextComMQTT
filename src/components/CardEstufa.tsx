"use client";

import Luminosidade from "./status/Luminosidade";
import Temperatura from "./status/Temperatura";
import Umidade from "./status/Umidade";
import axios from "axios";
import { useEffect, useState } from "react";

export type cardEstufaProps = {
    topico: string;
    item: string;
    titulo: string;
};

export type Status = {
    temperatura: string;
    umidade: string;
    luminosidade: string;
};

export default function CardEstufa({ topico, item, titulo }: cardEstufaProps) {
    const [msgStatus, setMsgStatus] = useState("Conectando..");

    const api = axios.create({
        baseURL: "https://api-para-mqtt.vercel.app",
    });
    const [status, setStatus] = useState({
        temperatura: 0,
        umidade: 0,
        luminosidade: 0,
    });

    async function atualizar() {
        let urlToRequest = "/" + topico + "/" + item;
        try {
            const response = await api.get(urlToRequest);

            console.log(response);
            setStatus(response.data);
            if (response.data != undefined && !Array.isArray(response.data)) {
                setMsgStatus("Conectado");
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        atualizar();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            atualizar();
        }, 3000);
    }, [status]);

    function carregarBarras() {
        return (
            <>
                <div>
                    <Luminosidade
                        valor={status.luminosidade}
                        msgStatus={msgStatus}
                    />
                    <Temperatura
                        valor={status.temperatura}
                        msgStatus={msgStatus}
                    />
                    <Umidade valor={status.umidade} msgStatus={msgStatus} />
                </div>
            </>
        );
    }

    return (
        <>
            <div className="rounded flex flex-col items-center bg-zinc-50 min-w-80 min-h-56">
                <h1 className="mt-2 text-xl font-semibold">{titulo}</h1>
                <div className="min-h-0.5 bg-stone-900 w-full"></div>
                <div className="w-10/12">
                    <div className="flex flex-row mt-3">
                        <p className="pr-2 font-semibold">Status: </p>
                        <p className="text-zinc-600">{msgStatus}</p>
                    </div>

                    {carregarBarras()}
                </div>
            </div>
        </>
    );
}
