import useUserStore from "./store/userStore";
import { setDarkMode, setUserId, setUsername } from "./actions";
import { User } from "./types/types";

export function login(user: User) {
    setUserId(user._id);
    setUsername(user.username);
    setDarkMode(user.darkMode);
    useUserStore.setState({ user });
}