import { useState, useCallback, useEffect, useContext } from "react";
import { DefaultTheme, ThemeContext } from "styled-components";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import { useAuth } from "../../../data/context/AuthContext";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { getUserData } from "../../../data/services/userService";
import { HeaderProps } from "../../../data/@types/Navbar/Navbar.type";

export function useNavbar({ onSearch }: HeaderProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { logout } = useAuth();
    const [userData, setUserData] = useState<UserDataTypes | null>(null);
    const [, setUserIcon] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
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

    const handleSearchByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSearch();
        }
    };

    const handleSearch = async () => {
        onSearch(searchTerm);
    };

    return {
        searchTerm,
        userData,
        userId,
        theme,
        isDropdownOpen,
        handleSearchByEnter,
        toggleDropdown,
        handleChange,
        handleLogout,
        handleSearch,
    };
}
