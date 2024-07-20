import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logos/Rick_and_Morty.svg"

const NavBar = () =>{

    return(
        <>
            <nav className="bg-secondary">
                <div className="mx-auto max-w-7xl p-2 sm:px-8 lg:px-8">
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <Image src={logo} alt="Rick and Morty logo" width={150} height={100} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;