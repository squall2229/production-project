import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import styles from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation("");

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={cn(styles.root, {}, [className])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <Button onClick={reloadPage}>{t("Перезагрузить страницу")}</Button>
        </div>
    );
};
