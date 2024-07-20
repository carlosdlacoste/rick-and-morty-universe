import { create }  from "zustand";

export interface User{
    id: number,
    fullName: string,
    email: string,
    password: string
}

export interface NewUser{
    fullName: string,
    email: string,
    password: string
}

export interface UserStore {
    users: User[];
    getUsers: () => Promise<void>;
    postUser: (newUser: NewUser) => Promise<boolean>;
}

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    getUsers: async () => {
        const response = await fetch('/api/users')
        const data: User[] = await response.json()
        set({ users: data })
    },
    postUser: async (newUser: NewUser): Promise<boolean>=> {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        if (response.ok) {
            await response.json();
            // set((state) => ({ users: [...state.users, data] }));
            return true;
        }
        return false;
    }
}))