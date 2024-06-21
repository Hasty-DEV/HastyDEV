import { useState, useCallback, useEffect } from "react";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { getUserData } from "../../../data/services/userService";
import { useAuth } from "../../../data/context/AuthContext";

export function useLeftBar() {
    const { logout } = useAuth();
    const [userData, setUserData] = useState<UserDataTypes | null>(null);
    const [loading, setLoading] = useState(false);
    const [userIcon, setUserIcon] = useState<string>();

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const user = await getUserData();
            setUserData(user);
            const icon = await getUserIcon();
            setUserIcon(icon);

        } catch (error) {
            console.error("Erro ao obter dados do usuário:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const getUserIdFromLocalStorage = () => {
        const userId = localStorage.getItem("userId");
        return userId;
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const userId = getUserIdFromLocalStorage();

    return {
        userId,
        userData,
        loading,
        userIcon,
        handleLogout
    }
}