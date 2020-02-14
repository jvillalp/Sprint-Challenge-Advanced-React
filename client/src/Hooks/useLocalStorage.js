import {useState} from 'react';

/*
    Custom hook that stores user preferences in the local storage of the browser.
    The local storage of the browser is a key-value map.
    Takes a key as a parameter, along with an initialValue. The returned
    storedValue shows the current value of the key in local storage,
    and the setValue function allows us to modify the value associated with
    the key.
*/
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item =window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue]
};
