import styles from "./RestaurantsPages.module.scss"
import RestaurantTabs from "../../components/restaurantTabs/components";
import { useGetRestaurantsQuery } from "../../store/services/api";
import { Outlet, useNavigate, useParams } from "react-router-dom/dist";

const RestaurantsPage = () => {
	const navigate = useNavigate();
	const { data: restaurants, isFetching: isRestaurantsFetching } = useGetRestaurantsQuery();
	const { restaurantId: selectedRestaurantId } = useParams();
	
    if ( isRestaurantsFetching )
        return null;

	return <div>
			<RestaurantTabs onTabClick={(id) => navigate(`/restaurants/${id}`) } restaurants={ restaurants } selectedRestaurantId={selectedRestaurantId} className={styles.tabs} />

			<Outlet/>
		</div>;
}

export default RestaurantsPage;