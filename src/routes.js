import Dash from "./Pages/Dash";
import Dashboards from "./Pages/Dashboards";
import Invoice from "./Pages/invoice";
import UserManagement from "./Pages/userManagement";
export const route = [
    {
        path: "/das",
        element: <Dash />,
        private: true,
    },

]
