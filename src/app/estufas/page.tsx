import EstufaMain from "@/components/EstufaMain";

export default function Estufas() {
    return (
        <>
            <div className="flex items-center flex-col justify-center pt-8 ">
                <h1 className="text-xl font-semibold mt-10 mb-5">Estufas</h1>
                <EstufaMain titulo="Legumes"></EstufaMain>
            </div>
        </>
    );
}
