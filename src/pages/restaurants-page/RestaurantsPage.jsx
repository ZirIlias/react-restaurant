import { useState } from "react";
import Restaurant from "../../components/restaurant/Restaurant";
import styles from "./RestaurantsPages.module.scss"
import Layout from "../../layout/Layout";
import RestaurantTabsContainer from "../../components/restaurantTabs/container";

const RestaurantsPage = () => {

	const [selectedRestaurantId, setSelectedRestaurantId] = useState();
	
	return <Layout className={styles.page}>
		<div className={"container"}>
			<RestaurantTabsContainer onTabClick={setSelectedRestaurantId} className={styles.tabs} selectedRestaurantId={selectedRestaurantId} />

			{selectedRestaurantId && <Restaurant id={selectedRestaurantId}/>
			}
		</div>
	</Layout>;
}

export default RestaurantsPage;