import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

/*
    Custom hook that calls useLocalStorage custom hook in order to enable/disable dark
    mode preferences for the user. The preferences persist through a browser session
    with the help of the useLocalStorage hook.
    The useDarkMode hook is called when the toggleButton is toggled, and either adds/removes
    the 'dark-mode' class from the body.
*/
export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() =>{
        if (darkMode === true){
            return document.querySelector("body").classList.add('dark-mode');
        }else {
            return document.querySelector("body").classList.remove('dark-mode');
        }
    }, [darkMode]);
    return [darkMode, setDarkMode];
}