import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation("main");

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmout>
            <div>{t("ProfilePage")}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
