import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

export interface UseThemeResult  {
    theme: Theme
    toggleThemeClick: () => void
};

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    const toggleThemeClick = () => {
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
       theme,
       toggleThemeClick
    };
}