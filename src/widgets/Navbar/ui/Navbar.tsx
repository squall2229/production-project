import { getUserAuthData, userActions } from "entities/User";
import { LoginModal } from "features/AuthByUsername";
import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onLogout}
            >
                {t("Выйти")}
            </Button>
        );
    }

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpen}
            >
                {t("Войти")}
            </Button>

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onClose}>
                    {t("Modal")}
                </LoginModal>
            )}
        </div>
    );
});
