import { create } from "zustand";
import { User } from "../types/types";
type State = {
    user: User | null;
};

type Action = {
    setUser: (user: User) => void;
};

const useUserStore = create<State & Action>((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}));

export default useUserStore;
