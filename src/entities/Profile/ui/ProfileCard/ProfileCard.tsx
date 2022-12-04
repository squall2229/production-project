import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ProfileCard.module.scss";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation("profile");
    const profileData = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.header}>
                <Text title={t("Профиль")} />
                <Button className={styles.editBtn} theme={ButtonTheme.OUTLINED}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    className={styles.input}
                    value={profileData?.first}
                    placeholder={t("Ваше имя")}
                />
                <Input
                    className={styles.input}
                    value={profileData?.lastname}
                    placeholder={t("Ваша фамилия")}
                />
            </div>
        </div>
    );
};
