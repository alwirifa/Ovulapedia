"use client"

// components/ProtectedRoute.tsx
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/context/UserContext';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, ready } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (ready && !user) {
            router.push('/auth/login'); 
        }
    }, [ready, user, router]);

    if (!ready) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
