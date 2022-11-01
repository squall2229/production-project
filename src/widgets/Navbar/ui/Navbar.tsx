import { LoginModal } from "features/AuthByUsername";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onOpen = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onOpen}
            >
                {t("Войти")}
            </Button>

            <LoginModal isOpen={isAuthModal} onClose={onClose}>
                {t("Modal")}
            </LoginModal>
        </div>
    );
};
