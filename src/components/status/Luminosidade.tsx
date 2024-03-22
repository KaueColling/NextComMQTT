import { propsStatus } from "./Temperatura";

export default function ({ valor }: propsStatus) {
    const valorPorcentagem = (valor / 4063) * 100;

    return (
        <>
            <div className="rounded mt-2 flex items-center text-lg w-68 min-h-9 h-9 bg-stone-400">
                <div
                    className="rounded bg-yellow-500 min-h-full"
                    style={{
                        minWidth: valorPorcentagem + "%",
                        width: valorPorcentagem + "%",
                    }}
                ></div>
                <p className="ml-5 absolute text-zinc-800 font-semibold">
                    Luminosidade: {valor} Lux
                </p>
            </div>
        </>
    );
}
