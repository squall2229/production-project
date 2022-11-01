import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <Input
                placeholder={t("Введите username")}
                className={styles.input}
                autofocus
                type="text"
            />
            <Input
                placeholder={t("Введите пароль")}
                className={styles.input}
                type="text"
            />
            <Button theme={ButtonTheme.CLEAR} className={styles.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};
