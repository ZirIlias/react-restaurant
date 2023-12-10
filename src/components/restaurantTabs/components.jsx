import RestaurantTabContainer from "../restaurantTab/container";
import styles from "./RestaurantTabs.module.scss";
import classNames from "classnames";

const RestaurantTabs = ( { restaurantIds, onTabClick, className, selectedRestaurantId} ) => {

    return <div className={ classNames( styles.tabsList, className) }>
        {restaurantIds.map((restaurantId) => (
            <RestaurantTabContainer key={restaurantId} restaurantId={restaurantId} onTabClick={ () => onTabClick(restaurantId) } active={ restaurantId === selectedRestaurantId} ></RestaurantTabContainer>
        ))}
    </div>;
}

export default RestaurantTabs;