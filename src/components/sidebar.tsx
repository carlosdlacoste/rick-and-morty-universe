"use client"
import { Sidebar, Flowbite } from "flowbite-react";
import { twMerge } from 'tailwind-merge';
import homeIcon from "../../public/icons/casa.svg"
import characterIcon from "../../public/icons/rick.svg"
import episodesIcon from "../../public/icons/episodes.svg"
import loginIcon from "../../public/icons/signin.svg"
import registerIcon from "../../public/icons/register.svg"
import signoutIcon from "../../public/icons/signout.svg"
import Image from "next/image";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const customTheme = {
    sidebar: {
        root: {
            base: twMerge('px-3 py-4', 'bg-one'),
        },
    },
};


const SideBar = () => {

    const {token, logout, getUserFromStorage} = useAuthStore();
    const router = useRouter();

    // useEffect(() => {
    //     getUserFromStorage()
    // }, []);

    const handleLogOut = () => {
        logout()
        console.log("se hizo logout")
        router.push("/")
        console.log("se navega a homepage")
    }
    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items >
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/" className="hover:bg-three">
                            <div className="flex items-center space-x-4">
                                <Image src={homeIcon} alt="Home icon" width={24} height={24} />
                                <span>Home</span>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:bg-three">
                            <div className="flex items-center space-x-4">
                                <Image src={characterIcon} alt="Character icon" width={24} height={24} />
                                <span>Characters</span>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:bg-three">
                            <div className="flex items-center space-x-4">
                                <Image src={episodesIcon} alt="Episode icon" width={24} height={24} />
                                <span>Episodes</span>
                            </div>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        {!token ?
                        <>
                            <Sidebar.Item href="/login" className="hover:bg-three">
                                <div className="flex items-center space-x-4">
                                    <Image src={loginIcon} alt="Login icon" width={24} height={24} />
                                    <span>Sign In</span>
                                </div>
                            </Sidebar.Item>
                            <Sidebar.Item href="signup" className="hover:bg-three">
                                <div className="flex items-center space-x-4">
                                    <Image src={registerIcon} alt="Register icon" width={24} height={24} />
                                    <span>Sign Up</span>
                                </div>
                            </Sidebar.Item>
                        </>
                        :
                        <>
                            <Sidebar.Item className="hover:bg-red-500 cursor-pointer" onClick={handleLogOut}>
                                <div className="flex items-center space-x-4">
                                    <Image src={signoutIcon} alt="Logout icon" width={24} height={24} />
                                    <span>Sign Out</span>
                                </div>
                            </Sidebar.Item>
                        </>
                        }
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </Flowbite>
    );
}

export default SideBar;