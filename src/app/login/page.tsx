"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

const Login = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, setUserFromStorage } = useAuthStore()
    const router = useRouter()
    const { toast } = useToast()

    const handleLogIn = async (event: React.FormEvent) =>{
        event.preventDefault()
        const success = await login(email, password)
        if(success) {
            setUserFromStorage()
            toast({
                variant: "success",
                title: "Welcome",
                description: "You have successfully logged in",
                duration: 4000
            })
            router.push("/")
        }
        else{
            toast({
                variant: "destructive",
                title: "Error",
                description: "Invalid credentials.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
                duration: 4000
            })
        }
    }


    return(
        <>
            <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight font-get-schwifty color-change-green">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input id="email" name="email" onChange={(event) => setEmail(event.target.value)} value={email || ''} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset p-2 ring-one focus:ring-2 focus:ring-inset focus:ring-one sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2 relative">
                                <input id="password" name="password" onChange={(event) => setPassword(event.target.value)} value={password || ''} type='password' autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-2 ring-1 ring-inset ring-one focus:ring-2 focus:ring-inset focus:ring-one sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div className="grid gap-y-3">
                            <Button onClick={(event) => handleLogIn(event)} className="flex w-full justify-center rounded-md bg-three px-3 py-1.5 text-sm font-bold leading-6 text-black shadow-sm hover:bg-one">Sign in</Button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't have an account yet? {" "}
                        <Link href="/signup">
                            <span className="font-semibold leading-6 text-gray-800 hover:text-one cursor-pointer">Sign up</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;