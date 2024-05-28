// "use client"

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// interface User {
//     name: string;
//     email: string;
//     _id: string;
// }

// interface UserContextType {
//     user: User | null;
//     setUser: React.Dispatch<React.SetStateAction<User | null>>;
//     ready: boolean;
// }


// export const UserContext = createContext<UserContextType | undefined>(undefined);

// export function UserContextProvider({ children }: { children: React.ReactNode }) {
//     const [user, setUser] = useState<User | null>(null);
//     const [ready, setReady] = useState(false);
//     const router = useRouter()




//     useEffect(() => {
//         if (!user) {

//             const fetchData = async () => {
//                 try {
//                     const token = getCookie('token'); // Asumsikan Anda memiliki fungsi untuk mendapatkan token dari cookies
                    
                    
//                     if (token) {
//                         const response = await axios.get('http://localhost:4000/profile', {
//                             headers: {
//                                 'Authorization': `Bearer ${token}`
//                             }
//                         });
//                         setUser(response.data);
//                     } else {
//                         console.warn('Token not found');
//                     }
//                 } catch (err) {
//                     console.error('Failed to fetch user data', err);
//                 } finally {
//                     setReady(true);
//                 }
//             };

//             fetchData();
//         }
//     }, [user]);

//     return (
//         <UserContext.Provider value={{ user, setUser, ready }}>
//             {children}
//         </UserContext.Provider>
//     );
// }

// // Fungsi untuk mendapatkan cookie
// function getCookie(name: string): string | undefined {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) {
//         const part = parts.pop();
//         if (part) {
//             return part.split(';').shift();
//         }
//     }
//     return undefined;
// }
