import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINED = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export enum ButtonSize {
    L = "size_l",
    M = "size_m",
    XL = "size_xl",
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    theme,
    square,
    disabled,
    size = ButtonSize.M,
    ...props
}) => {
    const mods: Record<string, boolean> = {
        [styles.square]: square,
        [styles.disabled]: disabled,
    };

    return (
        <button
            {...props}
            className={classNames(styles.root, mods, [
                className,
                styles[size],
                styles[theme],
            ])}
        >
            {children}
        </button>
    );
};
