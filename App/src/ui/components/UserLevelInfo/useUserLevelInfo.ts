import { useState, useCallback, useEffect } from "react";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { getUserData } from "../../../data/services/userService";

export function useUserLevelInfo() {
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

    return {
        userData,
        loading,
        userIcon
    }
}