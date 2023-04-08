import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classnames/classnames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import AboutIcon from 'shared/assets/icons/About.svg';
import MainIcon from 'shared/assets/icons/Main.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export function Sidebar(props: SidebarProps) {
    const { t } = useTranslation();

    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: isOpen }, [className])}
            data-testid="sidebar-testid"
        >
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.link}
                    theme="primary"
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.linkTitle}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to="/about"
                    className={cls.link}
                    theme="primary"
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.linkTitle}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={isOpen} />
            </div>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={handleToggleClick}
                className={cls.sidebarBtn}
                theme="backgroundInverted"
                square
                size="medium"
            >
                {isOpen ? '>' : '<'}
            </Button>
        </div>
    );
}
