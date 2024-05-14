import React from "react";
import LogoContainer from "@/components/logo";
import Menu from "@/components/menu";
import JoinButton from "@/components/join-button";
import Image from "next/image";

export default function Wrapper({children}: { children: React.ReactNode }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-2">
            <div className="z-10 w-full max-w-6xl bg-green-50 rounded-xl lg:p-4 p-2">
                <div className="flex flex-row-reverse lg:flex-row justify-between items-center w-full">
                    <LogoContainer/>
                    <Menu/>
                    <div>
                        <JoinButton/>
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </main>
    )
}