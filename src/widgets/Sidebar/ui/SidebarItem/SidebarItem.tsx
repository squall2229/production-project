import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/items";
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
    item: SidebarItemType;
    collapced: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(
    ({ item: { path, Icon, text }, collapced }) => {
        const { t } = useTranslation();

        return (
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={classNames(styles.item, {
                    [styles.collapsed]: collapced,
                })}
                to={path}
            >
                <Icon className={styles.icon} />
                <span className={styles.link}>{t(text)}</span>
            </AppLink>
        );
    }
);
