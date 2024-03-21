"use client"

import { redirect } from "next/navigation"
import Botao from "./Botao"


export type propsEstufaMain = {
    titulo: string
}

export default function EstufaMain({ titulo }: propsEstufaMain) {

    return (<>
        <div className="flex justify-evenly items-center flex-col min-w-80 min-h-52 bg-zinc-50 border-5">
            <p>{titulo}</p>
            <Botao onClick={() => {
                console.log("aqui")
                redirect("/dashboard")
            }} titulo={"Ver informações"} />
        </div>
    </>)
}