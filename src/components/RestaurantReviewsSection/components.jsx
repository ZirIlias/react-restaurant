import ReviewForm from "../reviewForm/ReviewForm";
import ReviewsContainer from "../reviews/container";
import styles from "./RestaurantReviewsSection.module.scss";
import classNames from "classnames";

export const RestaurantReviewsSection = ( { restaurantId }) => {

    return <div className={ classNames(styles.section, styles.reviewsSection )}>
        <ReviewsContainer restaurantId={restaurantId}/>
        <ReviewForm restaurantId={restaurantId}/>
    </div>
}