import useUserStore from "./store/userStore";
import { setDarkMode, setUserId, setUsername } from "./actions";

export function logout() {
    console.log("logout");
    setUserId("");
    setUsername("");
    setDarkMode(true);
    useUserStore.setState({ user: null });
}