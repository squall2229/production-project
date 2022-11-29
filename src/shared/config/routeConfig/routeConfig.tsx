import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    Main = "main",
    About = "about",
    Profile = "profile",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: "/",
    [AppRoutes.About]: "/about",
    [AppRoutes.Profile]: "/profile",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.Profile]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
