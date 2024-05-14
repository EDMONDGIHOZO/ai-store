import Image from "next/image";


const LogoContainer = () => {
    return(
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/logo.svg"
                    alt="AI-STORE LOGO"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                />
            </a>
        </div>
    )
}

export default LogoContainer