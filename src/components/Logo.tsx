import Image from "next/image";

export type LogoProps = {
    variant: string;
};

export default function Logo({ variant }: LogoProps) {
    return (
        <>
            <div className="flex flex-row items-center">
                {getVariant(variant)}
            </div>
        </>
    );
}

function getVariant(variant: string) {
    switch (variant) {
        case "white": {
            return (
                <>
                    <Image
                        src={"/whiteLogo.png"}
                        width={90}
                        height={90}
                        alt="logo"
                    />
                </>
            );
        }
        case "white-text": {
            return (
                <>
                    <Image
                        src={"/whiteLogo.png"}
                        width={90}
                        height={90}
                        alt="logo"
                    />
                    <p className="text-zinc-200">IO Plants</p>
                </>
            );
        }
        case "dark":
            <Image src={"/darkLogo.png"} width={90} height={90} alt="logo" />;

        case "dark-text": {
            <div>
                <Image
                    src={"/darkLogo.png"}
                    width={90}
                    height={90}
                    alt="logo"
                />
                <p className="text-zinc-200">IO Plants</p>
            </div>;
        }
    }
}
