import { createBrowserRouter } from "react-router-dom"
import { MainPage } from "../pages/main-page/component"
import RestaurantsPage from "../pages/restaurants-page/component"
import { NotFoundPage } from "../pages/not-found-page/component"

export const router = createBrowserRouter([
    {
        element: <MainPage/>,
        index: true
    },
    {
        path: "restaurants",
        element: <RestaurantsPage />,
        children: [
            {
                path: ":restaurantId",
                element: <div>Страница ресторана</div>,
            },
            {
                path: ":restaurantId/menu",
                element: <div>Меню</div>,
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage/>,
    },
])