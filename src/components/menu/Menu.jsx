import { useSelector } from "react-redux";
import Ul from "../../ui/ul/Ul";
import MenuItem from "../menuItem/MenuItem";
import styles from "./Menu.module.scss";
import { selectRestaurantMenuIds } from "../../store/features/entities/restaurant/selectors";

const Menu = ( {restaurantId, className}) => {

    const menuIds = useSelector( state => selectRestaurantMenuIds( state, restaurantId) );

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