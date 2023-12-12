import classNames from "classnames";
import MenuContainer from "../menu/container";
import ReviewForm from "../reviewForm/ReviewForm";
import styles from "./Restaurant.module.scss";
import ReviewsContainer from "../reviews/container";

const Restaurant = ( { restaurant } ) => {

   if (!restaurant)
      return null;

	return <div>
       <h2 className={classNames("title-h1", styles.title)}>{ restaurant.name }</h2>
       <MenuContainer restaurantId={restaurant.id} className={styles.section}/>
       <div className={ classNames(styles.section, styles.reviewsSection )}>
          <ReviewsContainer restaurantId={restaurant.id}/>
          <ReviewForm/>
        </div>
     </div>
}

export default Restaurant;