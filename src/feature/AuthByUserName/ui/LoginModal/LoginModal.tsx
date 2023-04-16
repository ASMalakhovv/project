import React from 'react';

import { classNames } from 'shared/lib/classnames/classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'feature/AuthByUserName/ui/LoginForm/LoginForm';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = React.memo((props: LoginModalProps) => {
    const { className, onClose, isOpen } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <LoginForm />
        </Modal>
    );
});
