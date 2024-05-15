import React from "react";
import LogoContainer from "@/components/logo";
import Menu from "@/components/menu";
import {FaUserPlus} from "react-icons/fa";
import {MdLogin} from "react-icons/md";
import Link from "next/link";

export default function Wrapper({children}: { children: React.ReactNode }) {
    return (
        <main className={"px-4 lg:px-24 py-6"}>
            <div className="z-10 bg-green-50 rounded-xl lg:p-4 p-2">
                <div className="flex flex-row-reverse lg:flex-row justify-between items-center w-full">
                    <LogoContainer/>
                    <Menu/>
                    <div className={"flex justify-start items-center"}>
                        <Link href={"/auth/register"}>
                            <button className="icon-btn">
                                <FaUserPlus />
                                <span>Sign Up</span>
                            </button>
                        </Link>
                        <Link href={"/auth/login"}>
                            <button className="outlined_btn">
                                <MdLogin />
                                <span>Login</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"w-full"}>
                {children}
            </div>
            <footer className={"text-xs py-5 bottom-0 text-center"}>
                <p>All rights reserved {new Date().getFullYear()} <strong>Agro-Input Store</strong></p>
            </footer>
        </main>
    )
}