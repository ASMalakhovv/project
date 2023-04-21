import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classnames/classnames';
import { Button } from 'shared/ui/Button/Button';
import { getUserAuthData, LoginModal } from 'feature/AuthByUserName';
import { userActions } from 'entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onIsOpenChange = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLoginModalClose = () => {
        setIsOpen(false);
    };

    const onLogoutClick = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.signIn}
                    theme="clear"
                    size="maxContent"
                    onClick={onLogoutClick}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }

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
