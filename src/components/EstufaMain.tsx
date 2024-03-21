"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import Botao from "./Botao";

export type propsEstufaMain = {
    titulo: string;
};

export default function EstufaMain({ titulo }: propsEstufaMain) {
    return (
        <>
            <div className="flex justify-evenly items-center flex-col min-w-80 min-h-52 bg-zinc-50 border-5">
                <p>{titulo}</p>
                <Link href={"/dashboard"}>
                    <Botao titulo={"Ver informações"} />
                </Link>
            </div>
        </>
    );
}
