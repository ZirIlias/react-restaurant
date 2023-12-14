import classNames from "classnames";
import Menu from "../menu/Menu";
import ReviewForm from "../reviewForm/ReviewForm";
import Reviews from "../reviews/Reviews";
import styles from "./Restaurant.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../store/entities/review/thunks/get-reviews-by-restaurant-id";

const Restaurant = ( { id } ) => {

   const restaurant = useSelector( (state) =>  selectRestaurantById(state, id) );

   const dispatch = useDispatch();
   useEffect( () => {
      dispatch( getReviewsByRestaurantId(id) );
   }, [id, dispatch]);

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