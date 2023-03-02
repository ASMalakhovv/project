import {classNames} from "shared/lib/classnames/classnames";

import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: isOpen}, [className])}>
            <button onClick={handleToggleClick}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
