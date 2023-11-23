import React from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs";

const RestaurantsPage = ( {restaurants}) => {

	const restaurantsMainInfo = restaurants.map( ({id, name}) => { return {id, name} });

	return <div>
		<RestaurantTabs restaurants={restaurantsMainInfo} />
		
		<hr /><hr />

		<div>
			{restaurants.map( (restaurant, index) => (
				<React.Fragment key={restaurant.id}>
					<Restaurant restaurant={restaurant}/>
					{index < restaurants.length-1 && <hr/>}
				</React.Fragment>
			))}
		</div>
	</div>;
}

export default RestaurantsPage;