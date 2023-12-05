import styles from "./RestaurantTabs.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../store/features/entities/restaurant/selectors";
import RestaurantTab from "../restaurantTab/RestaurantTab";

const RestaurantTabs = ( {onRestaurantSelect, className, selectedRestaurantId} ) => {

    const restaurantIds = useSelector( selectRestaurantIds );

    return <div className={ classNames( styles.tabsList, className) }>
        {restaurantIds.map((restaurantId) => (
            <RestaurantTab key={restaurantId} id={restaurantId} onClick={ () => onRestaurantSelect(restaurantId) } active={ restaurantId === selectedRestaurantId} ></RestaurantTab>
        ))}
    </div>;
}

export default RestaurantTabs;