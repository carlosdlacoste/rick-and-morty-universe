"use client"
import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const StateInitializer = ({ children }: Props) => {
    const handleToken = useAuthStore(state =>  state.setToken)

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token')
        if (storedToken) {
            handleToken(storedToken);
        }

    }, [handleToken]);

    return <>{children}</>;
};

export default StateInitializer;