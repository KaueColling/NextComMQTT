import Logo from "./Logo";

export default function Header() {
    return (
        <div className="flex-1 flex-row w-full bg-stone-900">
            <Logo variant={"white-text"} />
        </div>
    );
}
