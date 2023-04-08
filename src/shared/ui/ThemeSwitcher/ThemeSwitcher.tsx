import { classNames } from 'shared/lib/classnames/classnames';
import { Theme, useTheme } from 'app/providers/ThemeProviders';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleThemeClick } = useTheme();

    return (
        <Button
            theme="clear"
            size="maxContent"
            className={classNames('', {}, [className])}
            onClick={toggleThemeClick}
        >
            {theme === Theme.DARK ? <LightTheme /> : <DarkTheme />}
        </Button>
    );
};
