import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classnames/classnames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { getLoginForm, loginActions } from 'feature/AuthByUserName';
import { loginByUserName } from 'feature/AuthByUserName/model/services/loginByUserName/loginByUserName';

import { Text } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginForm);
    const dispatch = useDispatch();

    const onUserNameChange = useCallback((value: string) => {
        dispatch(loginActions.setUserName({ value }));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword({ value }));
    }, [dispatch]);

    const onLoginFormSubmit = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Авторизация')} />
            {error && <Text text={t('Проверьте правильность введенных данных')} theme="error" />}
            <Input
                name="userName"
                className={cls.input}
                type="text"
                autoFocus
                value={username}
                onChange={onUserNameChange}
            />
            <Input
                name="password"
                className={cls.input}
                type="text"
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                className={cls.btn}
                size="maxContent"
                onClick={onLoginFormSubmit}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
