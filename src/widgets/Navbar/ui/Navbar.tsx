import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classnames/classnames';
import { Button } from 'shared/ui/Button/Button';
import { LoginModal } from 'feature/AuthByUserName';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const { className } = props;

    const onIsOpenChange = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLoginModalClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.signIn}
                theme="clear"
                size="maxContent"
                onClick={onIsOpenChange}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isOpen} onClose={onLoginModalClose} />
        </div>
    );
};
