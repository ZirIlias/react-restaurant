import { useParams } from "react-router-dom/dist";
import { useGetDishesQuery } from "../../store/services/api";
import Menu from "./component";

export const MenuContainer = () => {
    const { restaurantId } = useParams();
    const { data: menu, isFetching } = useGetDishesQuery( restaurantId );
    
    if (isFetching)
        return "Menu loading";

    return <Menu menu={menu}/>
}