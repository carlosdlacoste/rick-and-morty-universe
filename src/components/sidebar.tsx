"use client"
import { Sidebar, Flowbite } from "flowbite-react";
import { twMerge } from 'tailwind-merge';
import homeIcon from "../../public/icons/casa.svg"
import characterIcon from "../../public/icons/rick.svg"
import episodesIcon from "../../public/icons/episodes.svg"
import loginIcon from "../../public/icons/signin.svg"
import registerIcon from "../../public/icons/register.svg"
import Image from "next/image";

export const customTheme = {
    sidebar: {
        root: {
            base: twMerge('px-3 py-4', 'bg-one'),
        },
    },
};


const SideBar = () => {
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
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </Flowbite>
    );
}

export default SideBar;