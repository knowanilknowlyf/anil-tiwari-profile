import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem("darkTheme") == "true";
    document.body.classList.toggle("dark-theme", isDarkTheme);
    return isDarkTheme;
  };
  const [theme, setTheme] = useState(checkDefaultTheme());
  const themeHandler = () => {
    setTheme(!theme);
    localStorage.setItem("darkTheme", theme);
    document.body.classList.toggle("dark-theme", theme);
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <Logo />

        <div>
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          <button type="button" style={{fontSize:'2rem',background:'transparent',border:'none'}} onClick={themeHandler}>
            {theme ? <FaSun /> : <FaMoon />}
          </button>
          {/* <ThemeToggle />
              <LogOutContainer/> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
