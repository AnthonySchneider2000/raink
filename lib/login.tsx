import useUserStore from "./store/userStore";
import { setDarkMode, setUserId, setUsername } from "./actions";

export function login(id: string, username: string, darkMode: boolean) {
    setUserId(id);
    setUsername(username);
    setDarkMode(darkMode);
    useUserStore.getState().setUserId(id);
    useUserStore.getState().setUsername(username);
    useUserStore.getState().setLoginState(true);
}