import classNames from "classnames";
import { Outlet, useNavigate, useParams } from "react-router-dom/dist";
import styles from "./RestaurantPage.module.scss";
import Button from "../../ui/button/Button";
import { useGetRestaurantQuery } from "../../store/services/api";

export const RestaurantPage = () => {

	const navigate = useNavigate();
	const { restaurantId } = useParams();

	const {data: restaurant, isFetching} = useGetRestaurantQuery(restaurantId);
	
	if (isFetching)
		return 'Restaurant loading';

	return <div>
		<h2 className={classNames("title-h1", styles.title)}>{ restaurant.name }</h2>

		<div className={styles.tabs}>
			<Button onClick={ () => navigate(`/restaurants/${restaurantId}/menu`) }>Меню</Button>
			<Button onClick={ () => navigate(`/restaurants/${restaurantId}/reviews`) }>Отзывы</Button>
		</div>

		<div className={ classNames( styles.section )}>
			<Outlet/>
		</div>  
	</div>;
}