"use client";

import Luminosidade from "./status/Luminosidade";
import Temperatura from "./status/Temperatura";
import Umidade from "./status/Umidade";
import axios from "axios";
import { useEffect, useState } from "react";

export type cardEstufaProps = {
    topico: string;
    item: string;
};

export type Status = {
    Temperatura: string;
    Umidade: string;
    Luminosidade: string;
};

export default function ({ topico, item }: cardEstufaProps) {
    const getStatus = (): string => {
        return "Conectando..";
    };

    const api = axios.create({
        baseURL: "https://api-para-mqtt.vercel.app",
    });
    const [status, setStatus] = useState({
        Temperatura: 0,
        Umidade: 0,
        Luminosidade: 0,
    });

    useEffect(() => {
        try {
            console.log("URL: " + "/mensagens/" + topico + "/" + item);
            api.get("/mensagens" + topico + "/" + item).then(
                (response: any) => {
                    console.log(response);
                    setStatus(response.data);
                }
            );
        } catch (err) {
            throw err;
        }
    }, []);

    return (
        <>
            <div className="flex flex-col items-center bg-zinc-50 min-w-80 min-h-56">
                <h1 className="mt-2 text-xl font-semibold">{item}</h1>
                <div className="min-h-0.5 bg-stone-900 w-full"></div>
                <div className="w-10/12">
                    <div className="flex flex-row mt-3">
                        <p className="pr-2 font-semibold">Status: </p>
                        <p className="text-zinc-600">{getStatus()}</p>
                    </div>

                    <Luminosidade valor={status.Luminosidade} />
                    <Temperatura valor={status.Temperatura} />
                    <Umidade valor={status.Umidade} />
                </div>
            </div>
        </>
    );
}
