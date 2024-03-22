import { propsStatus } from "./Temperatura";

export default function ({ valor }: propsStatus) {
    return (
        <>
            <div className="rounded mt-2 flex items-center text-lg w-68 min-h-9 h-9 bg-stone-400">
                <div
                    className="rounded bg-blue-400 min-h-full"
                    style={{
                        minWidth: valor + "%",
                        width: valor + "%",
                    }}
                ></div>
                <p className="ml-5 absolute text-zinc-800 font-semibold">
                    Umidade: {valor}%
                </p>
            </div>
        </>
    );
}
