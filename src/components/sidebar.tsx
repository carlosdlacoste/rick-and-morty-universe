"use client"
import { Sidebar } from "flowbite-react";


const SideBar = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" >
                        Characters
                    </Sidebar.Item>
                    <Sidebar.Item href="#" >
                        Episodes
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" >
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="#" >
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBar;