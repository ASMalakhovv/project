import {
    ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classnames/classnames';

import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 200;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const refTimeoutId = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closed]: isClosing,
    };

    const handleOverlayClick = useCallback(() => {
        setIsClosing(true);
        if (onClose) {
            setIsClosing(true);
            refTimeoutId.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleOverlayClick();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(refTimeoutId.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [handleOverlayClick, isOpen]);

    const handleContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleOverlayClick}>
                    <div
                        className={cls.content}
                        onClick={handleContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
