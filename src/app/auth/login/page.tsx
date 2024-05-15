"use client";

import {useState} from "react";
import TextInput from "@/components/text-input";
import LogoContainer from "@/components/logo";


export default function Login() {
    const [password, setPassword] = useState(null)
    const [identifier, setIdentifier] = useState(null)

    return (
        <div className={"bg-green-100 py-4 h-full min-h-screen p-10 lg:py-24"}>
            <LogoContainer />
            <div className={"w-full flex items-center justify-center"}>
                <div className={"rounded-xl bg-gray-50 shadow-xl p-5 flex flex-col justify-start mt-10"}>
                    <form action="#" className={"space-y-4"}>
                        <div className={"space-y-2 mb-4"}>
                            <h3 className={"text-2xl font-bold"}>Login</h3>
                            <p className={"text-sm text-gray-400"}>Welcome back, Please enter your credentials.</p>
                        </div>
                        <TextInput id={"identifier"} label={"Phone number"} />
                        <TextInput id={"password"} label={"Password"} />
                        <button className={"btn"}> Login </button>
                    </form>
                    <div className={"flex justify-between text-sm mt-4"}>
                        <p className={"text-gray-500"}>
                            You don't have an account?
                        </p>
                        <a className={"text-green-500"} href="/auth/register">Register here!</a>
                    </div>
                </div>
            </div>
        </div>
    )
}