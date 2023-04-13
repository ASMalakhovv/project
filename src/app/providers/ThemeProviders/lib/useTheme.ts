import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    theme: Theme
    toggleThemeClick: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);
    document.body.className = theme;

    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    const toggleThemeClick = () => {
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleThemeClick,
    };
};
