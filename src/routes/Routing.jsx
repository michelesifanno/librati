import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            // altre pagine che devono restare nel layout
        ],
    },
    {
        path: "/menu",
        element: <Menu />
    },
]);

export default router;
