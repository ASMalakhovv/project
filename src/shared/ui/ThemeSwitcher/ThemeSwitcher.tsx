import {classNames} from "shared/lib/classnames/classnames";
import {Theme, useTheme} from "app/providers/ThemeProviders";
import LightTheme from "shared/assets/icons/theme-light.svg";
import DarkTheme from "shared/assets/icons/theme-dark.svg";
import {Button, ThemeButton} from "shared/ui/Button/Button";

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;

    const {theme, toggleThemeClick} = useTheme();

    return (
        <>
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleThemeClick}
            >
                {theme === Theme.DARK ?  <LightTheme /> : <DarkTheme />}
            </Button>
        </>
    );
};