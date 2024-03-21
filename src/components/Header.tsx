import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center w-full bg-stone-900">
            <Logo variant={"white-text"} />
            <div className="flex flex-row items-center w-9/12 text-zinc-200">
                <Link href={"/dashboard"}>Dashboard</Link>
            </div>
        </div>
    );
}
