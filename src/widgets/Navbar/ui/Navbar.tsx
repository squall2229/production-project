import { FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <div className={styles.links}></div>
        </div>
    );
};
