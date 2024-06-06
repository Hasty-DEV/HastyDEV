import { useEffect, useRef } from "react";

export function useHeader() {
    const headerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const navbar = document.getElementById("navbarSupportedContent");
            const navbarToggle = document.querySelector(".custom-navbar-toggler");
            if (
                navbar &&
                navbar.classList.contains("show") &&
                !navbar.contains(event.target as Node) &&
                !headerRef.current?.contains(event.target as Node) &&
                navbarToggle &&
                navbarToggle instanceof HTMLElement
            ) {
                navbarToggle.click();
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return {
        headerRef,
    }
}