import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classnames/classnames';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.linkMain}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.PRIMARY}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
