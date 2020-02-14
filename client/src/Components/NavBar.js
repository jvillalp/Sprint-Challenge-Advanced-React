import React from 'react';
import {useDarkMode} from '../Hooks/useDarkMode';

const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode("dark Mode", false);

    const toggleButton = e =>{
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const lightMoon = (
        <p>Light Mode</p>);
        const darkMoon = (
            <p>Dark Mode</p>);


    return (
       <div>
           <button onClick={toggleButton}>{darkMode ? lightMoon : darkMoon}</button>
       </div> 
    )
}
export default Nav;