import { useRef } from "react";

const headerRef = useRef<HTMLDivElement>(null);

export const handleOutsideClick = (event: MouseEvent) => {
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
