import classNames from "classnames";
import Menu from "../menu/Menu";
import ReviewForm from "../reviewForm/ReviewForm";
import Reviews from "../reviews/Reviews";
import styles from "./Restaurant.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/features/entities/restaurant/selectors";

const Restaurant = ( { id } ) => {

   const restaurant = useSelector( (state) =>  selectRestaurantById(state, id) );

   if (!restaurant)
      return null;

	return <div>
       <h2 className={classNames("title-h1", styles.title)}>{ restaurant.name }</h2>
       <Menu restaurantId={id} className={styles.section}/>
       <div className={ classNames(styles.section, styles.reviewsSection )}>
          <Reviews restaurantId={id}/>
          <ReviewForm/>
        </div>
     </div>
}

export default Restaurant;