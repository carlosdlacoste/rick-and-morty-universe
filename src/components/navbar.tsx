import Link from "next/link";

const NavBar = () =>{

    return(
        <>
            <nav className="bg-secondary">
                <div className="mx-auto max-w-7xl p-2 sm:px-8 lg:px-8">
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <h2 className="text-white text-2xl">Rick and Morty</h2>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;