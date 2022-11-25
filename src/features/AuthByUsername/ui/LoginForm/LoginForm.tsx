import { loginActions, loginReducer } from "../../model/slice/LoginSlice";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "./LoginForm.module.scss";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

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
        <DynamicModuleLoader removeAfterUnmout reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
