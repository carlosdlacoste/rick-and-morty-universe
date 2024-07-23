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
    logout: () => void;
    getUserFromStorage: () => void;
    setUserFromStorage: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
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
                return true
            }
            return false
        } catch (error) {
            console.log(error)
            set({token: null, userLoggedIn: null})
            return false
        }
    },
    logout: () => {
        set({token: null, userLoggedIn: null})
        sessionStorage.removeItem("token");
        localStorage.removeItem("user");
    },
    getUserFromStorage: () => {
        const userString = localStorage.getItem('user');
        const userLoggedIn = userString ? (JSON.parse(userString) as AuthUser) : null;
        set({token: sessionStorage.getItem('token'), userLoggedIn: userLoggedIn})
    },
    setUserFromStorage: () => {
        const {token, userLoggedIn} = get()
        if(token && userLoggedIn) {
            sessionStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(userLoggedIn))
        }
    }
}))