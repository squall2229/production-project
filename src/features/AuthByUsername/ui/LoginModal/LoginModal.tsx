import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    isOpen,
    onClose,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={classNames(styles.root, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
