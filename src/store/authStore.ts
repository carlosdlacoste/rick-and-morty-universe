import { create }  from "zustand";

// export interface credentials{
//     email: string;
//     password: string;
// }

export interface AuthUser{
    id: number;
    fullName: string;
    email: string;
}

export interface AuthStore{
    token: string | null;
    userLoggedIn: AuthUser | null;
    login: (email: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthStore>((set) => ({
    token: null,
    userLoggedIn: null,
    login: async (email: string, password: string): Promise<boolean> =>{
        try {
            const response = await fetch('/api/auth', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            if(response.ok) {
                const data = await response.json()
                // console.log("esto viene del backend", data);
                set({token: data.token, userLoggedIn: data.user})
                sessionStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user))
                return true
            }
            return false
        } catch (error) {
            console.log(error)
            set({token: null, userLoggedIn: null})
            return false
        }
    }
}))