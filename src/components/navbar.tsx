"use client"
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logos/Rick_and_Morty.svg"
import burgerMenu from "../../public/icons/burger-menu.svg"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import SideBar from "./sidebar";

const NavBar = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // useEffect(() => {
    //     setIsSidebarOpen(false)
    // }, []);

    return(
        <>
            <nav className="bg-two">
                <div className="mx-auto max-w-7xl p-2 sm:px-8 lg:px-8">
                    <div className="flex justify-center items-center">
                        <Button className="bg-three hover:bg-one" onClick={toggleSidebar}>
                            <Image src={burgerMenu} alt="Burger menu" width={24} height={24} />
                        </Button>
                        <div className="flex-1 flex justify-center">
                            <Link href="/">
                                <Image src={logo} alt="Rick and Morty logo" width={150} height={100} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {isSidebarOpen &&
                <>
                    <div className="fixed">
                        <SideBar/>
                    </div>
                </>
            }
        </>
    )
}

export default NavBar;