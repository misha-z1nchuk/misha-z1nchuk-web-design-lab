import {ABOUT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import About from "./pages/About";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }

]

export const publicRoutes = [
    {
        path :  LOGIN_ROUTE,
        Component: Auth
    },
    {
        path :  REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    }

]