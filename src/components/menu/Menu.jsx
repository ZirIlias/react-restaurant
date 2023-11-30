import Ul from "../../ui/ul/Ul";
import MenuItem from "../menuItem/MenuItem";
import styles from "./Menu.module.scss";

const Menu = ( {menu, className}) => {
    return <div className={className}>
        <h3 className={"title-h2"}>Меню</h3>
        <Ul className={styles.ul}>
            {menu.map( ( dish ) => (
                <li key={dish.id}>
                    <MenuItem dish={dish}/>
                </li>
            ))}
        </Ul>
    </div>    
}

export default Menu;