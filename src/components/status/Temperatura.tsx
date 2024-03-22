export type propsStatus = {
    valor: number;
};
export default function ({ valor }: propsStatus) {
    const valorPorcentagem = ((valor + 40) / 120) * 100;

    return (
        <>
            <div className="mt-2 flex items-center text-lg w-68 min-h-9 h-9 bg-stone-400">
                <div
                    className="bg-lime-500 min-h-full"
                    style={{
                        minWidth: valorPorcentagem + "%",
                        width: valorPorcentagem + "%",
                    }}
                ></div>
                <p className="ml-5 absolute text-zinc-800 font-semibold">
                    Temperatura: {valor} ºC
                </p>
            </div>
        </>
    );
}
