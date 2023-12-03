import { useState } from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs";
import styles from "./RestaurantsPages.module.scss"
import Layout from "../../layout/Layout";
import { useTheme } from "../../context/ThemeContext/hooks";

const RestaurantsPage = ( {restaurants}) => {

	const [selectedRestaurantId, setSelectedRestaurantId] = useState();

	const restaurantsMainInfo = restaurants.map( ({id, name}) => { return {id, name} });
	const selectedRestaurant = restaurants.find( ({id}) => {
		return selectedRestaurantId == id;
	});

	const {theme} = useTheme();
	
	return <Layout className={styles.page}>
		<div className={"container"}>
			<RestaurantTabs restaurants={restaurantsMainInfo} onRestaurantSelect={setSelectedRestaurantId} className={styles.tabs} selectedRestaurantId={selectedRestaurantId} theme={theme} />

			{selectedRestaurant && <Restaurant restaurant={selectedRestaurant}/>
			}
		</div>
	</Layout>;
}

export default RestaurantsPage;