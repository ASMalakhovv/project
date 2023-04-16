import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classnames/classnames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                type="text"
                autoFocus
            />
            <Input
                className={cls.input}
                type="text"
            />
            <Button
                className={cls.btn}
                size="maxContent"
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
