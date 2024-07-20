"use client"
import { Sidebar, Flowbite } from "flowbite-react";
import { twMerge } from 'tailwind-merge';

export const customTheme = {
    sidebar: {
        root: {
            base: twMerge('px-3 py-4', 'bg-one'), // Cambia esto al color que desees
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
                            Home
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:bg-three">
                            Characters
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className="hover:bg-three">
                            Episodes
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/login" className="hover:bg-three">
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="signup" className="hover:bg-three">
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </Flowbite>
    );
}

export default SideBar;