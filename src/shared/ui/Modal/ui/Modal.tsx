import { useTheme } from "app/providers/ThemeProvider";
import {
    FC,
    MouseEvent,
    ReactNode,
    useRef,
    useEffect,
    useState,
    useCallback,
} from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "shared/ui/Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
    isOpen: boolean;
    children: ReactNode;
    className?: string;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = ({
    className,
    isOpen,
    onClose,
    children,
}) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(() => {
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
    }, [handleClose]);

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(styles.root, mods, [className])}>
                <div onClick={handleClose} className={styles.overlay}>
                    <div onClick={onContentClick} className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
