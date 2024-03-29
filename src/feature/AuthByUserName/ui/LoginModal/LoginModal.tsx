import React from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'feature/AuthByUserName/ui/LoginForm/LoginForm';

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal = React.memo((props: LoginModalProps) => {
    const { className, onClose, isOpen } = props;

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <LoginForm />
        </Modal>
    );
});
