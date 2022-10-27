import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINED = "outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(styles.root, {}, [className, styles[theme]])}
    >
      {children}
    </button>
  );
};
