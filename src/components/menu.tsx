"use client";

import React, { useState} from "react";
import {RiMenu2Line, RiMenu3Fill} from "react-icons/ri";
import {MenuItems} from "@/constants/menuItems";

const Menu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <nav className="relative">
                {/* Menu Items (Desktop/Tablet) */}
                <div className="hidden md:flex space-x-8">
                    {MenuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className="text-gray-800 hover:text-green-500"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Menu Items (Mobile) */}
                {isOpen && (
                    <div className="md:hidden absolute top-full right-0 bg-white mt-2 w-48 rounded-md shadow-lg">
                        {MenuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
                <button className="icon-btn lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiMenu3Fill/> : <RiMenu2Line/>}
                </button>
            </nav>
        </>
    )
}

export default Menu;