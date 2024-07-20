"use client"
import { Sidebar } from "flowbite-react";


const SideBar = () => {
    return (
        <Sidebar aria-label="Sidebar with content separator example" className="bg-two !important">
            <Sidebar.Items >
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#">
                        Characters
                    </Sidebar.Item>
                    <Sidebar.Item href="#" >
                        Episodes
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="/login" >
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item href="signup" >
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default SideBar;