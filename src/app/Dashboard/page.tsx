"use client";
import CardEstufa from "@/components/CardEstufa";
import Botao from "@/components/Botao";
import Link from "next/link";
import { useMemo } from "react";

export default function Dashboard() {
    return (
        <>
            <div>
                <div className="mt-4 ml-4">
                    <Link href={"/estufas"}>
                        <Botao titulo="Voltar"></Botao>
                    </Link>
                </div>

                <div className="flex flex-row items-center justify-center pt-8 gap-8">
                    <CardEstufa
                        titulo={"Pimentão"}
                        topico="legumes"
                        item="pimentao"
                    ></CardEstufa>
                    <CardEstufa
                        titulo={"Cenoura"}
                        topico="legumes"
                        item="cenoura"
                    ></CardEstufa>
                    <CardEstufa
                        titulo={"Abobóra"}
                        topico="legumes"
                        item="abobora"
                    ></CardEstufa>
                </div>
            </div>
        </>
    );
}
