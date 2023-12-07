import { useState } from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import RestaurantTabs from "../../components/restaurantTabs/RestaurantTabs";
import styles from "./RestaurantsPages.module.scss"
import Layout from "../../layout/Layout";

const RestaurantsPage = () => {

	const [selectedRestaurantId, setSelectedRestaurantId] = useState();
	
	return <Layout className={styles.page}>
		<div className={"container"}>
			<RestaurantTabs onRestaurantSelect={setSelectedRestaurantId} className={styles.tabs} selectedRestaurantId={selectedRestaurantId} />

			{selectedRestaurantId && <Restaurant id={selectedRestaurantId}/>
			}
		</div>
	</Layout>;
}

export default RestaurantsPage;