import { classNames } from 'shared/lib/classnames/classnames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const { className } = props;

    const onIsOpenChange = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

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
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isOpen} onClose={onIsOpenChange}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus exercitationem facilis laboriosam nulla quod ratione reiciendis sunt veritatis voluptates!
            </Modal>
        </div>
    );
};
