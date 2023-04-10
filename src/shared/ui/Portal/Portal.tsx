import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

interface PortalProps {
    children?: ReactNode
    container?: HTMLElement
}

export const Portal = (props: PortalProps) => {
    const {
        container = document.body,
        children,
    } = props;

    return createPortal(children, container);
};
