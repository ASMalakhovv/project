import { classNames } from 'shared/lib/classnames/classnames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';

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
            <button
                data-testid="sidebar-toggle"
                type="button"
                onClick={handleToggleClick}
            >
                {t('Нажать')}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
}
