import { createContext, useEffect, useState, useContext, type ReactNode } from 'react';

const AuthContext = createContext('');

interface AuthContextType {
    session: string
}

export function AuthContextProvider({children}: {children: ReactNode}) {
    const [session, setSession] = useState<string >('');

    return(
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}