import { useState } from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs";
import styles from "./RestaurantsPages.module.scss"

const RestaurantsPage = ( {restaurants}) => {

	const [selectedRestaurantId, setSelectedRestaurantId] = useState();

	const restaurantsMainInfo = restaurants.map( ({id, name}) => { return {id, name} });
	const selectedRestaurant = restaurants.find( ({id}) => {
		return selectedRestaurantId == id;
	});
	

	return <div className={styles.page}>
		<div className={"container"}>
			<RestaurantTabs restaurants={restaurantsMainInfo} onRestaurantSelect={setSelectedRestaurantId} className={styles.tabs} selectedRestaurantId={selectedRestaurantId} />

			{selectedRestaurant && <Restaurant restaurant={selectedRestaurant}/>
			}
		</div>
	</div>;
}

export default RestaurantsPage;