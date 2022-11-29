import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-page.svg";
import ProfilePageIcon from "shared/assets/icons/profile-page.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: "Главная",
        Icon: MainPageIcon,
    },
    {
        path: RoutePath.about,
        text: "О сайте",
        Icon: AboutPageIcon,
    },
    {
        path: RoutePath.profile,
        text: "Профиль",
        Icon: ProfilePageIcon,
    },
];
