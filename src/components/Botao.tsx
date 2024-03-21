"use client"
export type buttonProps = {
    onClick?: () => void
    titulo: string
}

export default function Botao({titulo, onClick}: buttonProps) {
    return <>
        <button className="bg-green-900 hover:bg-green-950" onClick={onClick} >
            <p className="font-semibold text-xl text-zinc-100 px-8 py-2">{titulo}</p>
        </button>
    </>
}