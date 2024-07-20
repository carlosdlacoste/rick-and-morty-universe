"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface User{
    fullName: string;
    email: string;
    password: string;
}

const SignUp = () =>{

    const [user, setUser] = useState<User>({fullName: "", email: "", password: ""})
    const router = useRouter()


    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight color-change-green">Sign up</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                            <div className="mt-2">
                                <input id="fullName" name="full-name" type="text" onChange={(event) => setUser({...user, fullName: event.target.value})} value={user.fullName || ''} autoComplete="full-name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary p-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" onChange={(event) => setUser({...user, email: event.target.value})} value={user.email || ''} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" onChange={(event) => setUser({...user, password: event.target.value})} value={user.password || ''} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2 ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button className="flex w-full justify-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary">Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account? {" "}
                        <Link href="/login">
                            <span className="font-semibold leading-6 text-gray-800 hover:text-primary cursor-pointer">Sign in</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SignUp