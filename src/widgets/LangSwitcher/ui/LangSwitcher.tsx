import { FC } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={cn("", {}, [className])}
        >
            {t("Язык")}
        </Button>
    );
};
