import { create } from 'zustand';

export interface AuthStore {
    isLoggedIn: boolean;
    token: string | null;
    message: string | null;
    status: 'idle' | 'pending' | 'success' | 'error';
    login: (token: string) => void;
    logout: () => void;
    setMessage: (message: string | null) => void;
    setStatus: (status: 'idle' | 'pending' | 'success' | 'error') => void;
    saveToken: (token: string | null) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: false,
    token: null,
    message: null,
    status: 'idle',
    login: (token: string) => set({ isLoggedIn: true, token }),
    logout: () => set({ isLoggedIn: false, token: null }),
    setMessage: (message: string | null) => set({ message }),
    setStatus: (status: 'idle' | 'pending' | 'success' | 'error') => set({ status }),
    saveToken: (token: string | null) => {
        set({ token });
        if (token) {
            localStorage.setItem('user', token);
        } else {
            localStorage.removeItem('user');
        }
    },

}));

export default useAuthStore;
