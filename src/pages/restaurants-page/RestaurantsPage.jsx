import { useState } from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import styles from "./RestaurantsPages.module.scss"
import Layout from "../../layout/Layout";
import { useGetRestaurantsQuery } from "../../services/api";
import RestaurantTabs from "../../components/restaurantTabs/components";

const RestaurantsPage = () => {

	const [selectedRestaurantId, setSelectedRestaurantId] = useState();
	const { data: restaurants, isFetching: isRestaurantsFetching } = useGetRestaurantsQuery();
	
    if ( isRestaurantsFetching )
        return null;

	return <Layout className={styles.page}>
		<div className={"container"}>
			<RestaurantTabs onTabClick={setSelectedRestaurantId} restaurants={ restaurants } selectedRestaurantId={selectedRestaurantId} className={styles.tabs} />

			{selectedRestaurantId && <Restaurant restaurant={ restaurants.find( ({id}) => id == selectedRestaurantId) } />
			}
		</div>
	</Layout>;
}

export default RestaurantsPage;