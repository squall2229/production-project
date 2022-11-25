import { loginActions } from "../../model/slice/LoginSlice";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "./LoginForm.module.scss";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <Text title={t("Форма авторизации")} />
            {error && (
                <Text
                    theme={TextTheme.ERROR}
                    text={t("Вы ввели неверный пароль или логин")}
                />
            )}
            <Input
                placeholder={t("Введите username")}
                onChange={onChangeUsername}
                className={styles.input}
                value={username}
                autofocus
                type="text"
            />
            <Input
                placeholder={t("Введите пароль")}
                onChange={onChangePassword}
                className={styles.input}
                value={password}
                type="text"
            />
            <Button
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINED}
                className={styles.loginBtn}
                disabled={isLoading}
            >
                {t("Войти")}
            </Button>
        </div>
    );
});
