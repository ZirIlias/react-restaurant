import { useState } from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs";

const RestaurantsPage = ( {restaurants}) => {

	const [selectedRestaurantId, setSelectedRestaurantId] = useState();

	const restaurantsMainInfo = restaurants.map( ({id, name}) => { return {id, name} });
	const selectedRestaurant = restaurants.find( ({id}) => {
		return selectedRestaurantId == id;
	});
	

	return <div>
		<RestaurantTabs restaurants={restaurantsMainInfo} onRestaurantSelect={setSelectedRestaurantId} />
		
		<hr /><hr />
		
		{selectedRestaurant && <Restaurant restaurant={selectedRestaurant}/>
		}
	</div>;
}

export default RestaurantsPage;