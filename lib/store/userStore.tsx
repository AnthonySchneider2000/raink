import { create } from "zustand";
type State = {
    userId: string;
    username: string;
    isLoggedIn: boolean;
};

type Action = {
    setUserId: (userId: string) => void;
    setUsername: (username: string) => void;
    setLoginState: (isLoggedIn: boolean) => void;
};

const useUserStore = create<State & Action>((set) => ({
    userId: "",
    username: "",
    isLoggedIn: false,
    setUserId: (userId: string) => set({ userId }),
    setUsername: (username: string) => set({ username }),
    setLoginState: (isLoggedIn: boolean) => set({ isLoggedIn }),
}));

export default useUserStore;