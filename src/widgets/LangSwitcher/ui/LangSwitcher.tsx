import { classNames } from 'shared/lib/classnames/classnames';

import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const onToggleClick = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggleClick}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};
