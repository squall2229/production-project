import { FC, memo } from "react";
import { classNames as cn } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
    ({ className, short }) => {
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
                {t(short ? "Короткий язык" : "Язык")}
            </Button>
        );
    }
);
