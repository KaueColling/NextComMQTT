import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <div className="flex flex-row justify-center items-center w-full bg-green-900 min-h-28">
            <h1 className="text-zinc-100 text-xl font-semibold" >Horta Palácio dos Sabores</h1>
        </div>
    );
}
