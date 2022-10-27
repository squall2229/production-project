import { FC, useState } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
// import { Button } from "shared/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemSwitcher } from "widgets/ThemeSwitcher";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    // const onToggle = () => {
    //     setCollapsed((prev) => !prev);
    // };

    return (
        <div
            data-testid="sidebar"
            className={cn(styles.root, { [styles.collapsed]: collapsed }, [
                className,
            ])}
        >
            {/* <Button data-testid="sidebar-toggle" onClick={onToggle}>
                toggle
            </Button> */}
            <div className={styles.switchers}>
                <ThemSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
