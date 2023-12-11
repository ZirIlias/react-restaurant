import { useDispatch, useSelector } from "react-redux";
import Ul from "../../ui/ul/Ul";
import MenuItem from "../menuItem/MenuItem";
import styles from "./Menu.module.scss";
import { selectRestaurantMenuIds } from "../../store/entities/restaurant/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../store/entities/dish/thunks/get-dishes-by-restaurant-id";

const Menu = ( {restaurantId, className}) => {

    const menuIds = useSelector( state => selectRestaurantMenuIds( state, restaurantId) );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getDishesByRestaurantId( restaurantId ) );
    },[restaurantId, dispatch]);

    return <div className={className}>
        <h3 className={"title-h2"}>Меню</h3>
        <Ul className={styles.ul}>
            {menuIds.map( ( menuId ) => (
                <li key={menuId}>
                    <MenuItem id={menuId}/>
                </li>
            ))}
        </Ul>
    </div>    
}

export default Menu;