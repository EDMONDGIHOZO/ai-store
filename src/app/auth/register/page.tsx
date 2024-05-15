"use client";

import {useState} from "react";
import TextInput from "@/components/text-input";
import LogoContainer from "@/components/logo";


export default function Register() {
    const [password, setPassword] = useState(null)
    const [identifier, setIdentifier] = useState(null)

    return (
        <div className={"bg-green-100 py-4 h-full min-h-screen lg:py-24"}>
            <LogoContainer />
            <div className={"w-full flex items-center justify-center"}>
                <div className={"rounded-xl bg-gray-50 shadow-xl p-5 flex flex-col justify-start mt-10"}>
                    <form action="#" className={"space-y-4"}>
                        <div className={"space-y-2 mb-4"}>
                            <h3 className={"text-2xl font-bold"}>Create an account</h3>
                            <p className={"text-sm text-gray-400"}>Please enter your details.</p>
                        </div>
                        <TextInput id={"first_name"} label={"First name"} />
                        <TextInput id={"last_name"} label={"Last name"} />
                        <TextInput id={"phone_number"} label={"Phone number"} />
                        <TextInput id={"land_size"} label={"Land size (Acres)"} />
                        <button className={"btn"}> Register </button>
                    </form>
                    <div className={"flex justify-between text-sm mt-4 space-x-12"}>
                        <p className={"text-gray-500"}>
                            Already have an account?
                        </p>
                        <a className={"text-green-500"} href="/auth/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}