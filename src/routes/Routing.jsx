import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import MenuRoot from "../pages/MenuRoot";
import Menu from "../pages/Menu";
import SinglePage from "../pages/SinglePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />,
            },
        ],
    },
    {
        path: "/drinklist",
        element: <MenuRoot />,
        children: [
            {
                index: true,
                element: <Menu />,
            },
            {
                path: ":category",
                element: <SinglePage />,
            },
        ],
    },
]);

export default router;