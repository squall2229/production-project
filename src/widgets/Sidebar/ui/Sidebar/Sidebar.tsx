import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonTheme } from "shared/ui/Button";
import { ButtonSize } from "shared/ui/Button/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemSwitcher } from "widgets/ThemeSwitcher";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-page.svg";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={cn(styles.root, { [styles.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                    to={RoutePath.main}
                >
                    <MainPageIcon className={styles.icon} />
                    <span className={styles.link}>{t("Главная")}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                    to={RoutePath.about}
                >
                    <AboutPageIcon className={styles.icon} />
                    <span className={styles.link}>{t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
