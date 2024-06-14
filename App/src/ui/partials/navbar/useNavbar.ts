import { useState, useCallback, useEffect, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import { useAuth } from "../../../data/context/AuthContext";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { getUserData } from "../../../data/services/userService";

export function useNavbar() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { logout } = useAuth();
    const [userData, setUserData] = useState<UserDataTypes | null>(null);
    const [, setUserIcon] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const getUserIdFromLocalStorage = () => {
        const userId = localStorage.getItem("userId");
        return userId;
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const fetchData = useCallback(async () => {
        try {
            const user = await getUserData();
            setUserData(user);
            const icon = await getUserIcon();
            if (icon) {
                setUserIcon(icon);
            }
        } catch (error) {
            console.error("Erro ao obter dados do usuário:", error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    };

    const userId = getUserIdFromLocalStorage();
    const theme: DefaultTheme = useContext(ThemeContext);

    

    const handleSearch = async () => {
        alert('Função não implementada.')
        throw new Error('NOT_IMPLEMENTED')
        /*onSearch(searchTerm); */
    };


    return {
        searchTerm,
        userData,
        userId,
        theme,
        isDropdownOpen,
        toggleDropdown,
        handleChange,
        handleLogout,
        handleSearch
    }
}