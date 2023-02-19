import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {classNames} from "shared/lib/classnames/classnames";

import cls from './Navbar.module.scss';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    className={cls.linkMain}
                    theme={AppLinkTheme.SECONDARY}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.PRIMARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
