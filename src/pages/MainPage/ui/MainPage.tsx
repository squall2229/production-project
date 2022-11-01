import { useState } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation("main");
    const [value, setValue] = useState("");

    const onChange = (value: string) => {
        setValue(value);
    };

    return <div>{t("Главная")}</div>;
};

export default MainPage;
