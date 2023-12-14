import { useGetDishesQuery } from "../../store/services/api";
import Menu from "./component";

const MenuContainer = ( {restaurantId, className}) => {

    const { data, isFetching } = useGetDishesQuery( restaurantId );
    
    if (isFetching)
        return null;

    return <Menu className={className} menu={data}/>
}

export default MenuContainer;