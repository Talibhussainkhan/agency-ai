import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeTogglebtn = ({ theme, setTheme }) => {

    useEffect(() => {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }, [])
    
    useEffect(() => {
     if(theme === 'dark'){
        document.documentElement.classList.add('dark')
     }else{
        document.documentElement.classList.remove('dark')
     }
     localStorage.setItem('theme', theme)
    }, [theme])

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-8 p-1.5 border border-gray-500 rounded-full"
            alt="sun-icon"
          />
        ) : (
          <img
            src={assets.moon_icon}
            className="size-8 p-1.5 border border-gray-500 rounded-full"
            alt="moon_icon"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </>
  );
};

export default ThemeTogglebtn;
