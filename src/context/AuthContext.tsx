import { createContext, useEffect, useState, useContext, type ReactNode } from 'react';
import { supabase } from '../supabaseClient';
import type { Session } from '@supabase/supabase-js';

// 1. Definisikan tipe data untuk Context yang lengkap
interface AuthContextType {
    session: Session | null | undefined;
    signUpNewUser: (email: string, password: string) => Promise<{ success: boolean; data?: any; error?: any }>;
    signInUser: (email: string, password: string) => Promise<{ success: boolean; data?: any, error?: any }>;
    signOut: () => Promise<void>;
    signWithGoogle: () => Promise<{ success: boolean; data?: any, error?: any }>;
    // karena fungsinya menghubungi internet (asinkronus), dia akan mengembalikan sebuah Promise yang berisi objek hasil (success, data, atau error).
}

// 2. Inisialisasi Context dengan tipe yang benar (bisa null di awal)
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }) {
    // Gunakan tipe Session | null | undefined dari Supabase
    const [session, setSession] = useState<Session | null | undefined>(undefined);

    // 3. Tambahkan useEffect untuk memantau perubahan status autentikasi Supabase
    useEffect(() => {
        // Ambil sesi aktif saat aplikasi pertama kali dimuat
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // Dengarkan perubahan status auth (login, logout, token refresh)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    // 4. Tambahkan parameter email dan password ke fungsi signUp
    async function signUpNewUser(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error("There was a problem signing up: ", error);
            return { success: false, error };
        }
        return { success: true, data };
    }

    async function signWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google", // artinya login pakai provider google
            options: {
                redirectTo: `${window.location.origin}/dashboard`, // biar langsung redirect ke dashboard
                queryParams: {
                    prompt: "select_account", // biar bisa pilih akun dulu
                },
            },
        });

        if (error) {
            console.error("Google sign-in error:", error);
            return { success: false, error };
        }

        return { success: true, data };
    }

    // Sign in
    async function signInUser(email: string, password: string) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) {
                console.error("sign in error occured: ", error)
                return { success: false, error: error }
            }
            return { success: true, data }

        } catch (error) {
            console.error("an error occured", error)
            return { success: false, error: error }
        }
    }

    // Sign out
    async function signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("There was a problem signing up: ", error);
        }
    }

    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut, signWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}

// 5. Custom hook dengan validasi null-checking
export function UserAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('UserAuth harus digunakan di dalam AuthContextProvider');
    }
    return context;
}
