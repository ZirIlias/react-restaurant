import classNames from "classnames";
import Menu from "../menu/Menu";
import ReviewForm from "../reviewForm/ReviewForm";
import Reviews from "../reviews/Reviews";
import styles from "./Restaurant.module.scss";

const Restaurant = ( { restaurant: {name, menu, reviews} } ) => {
	return <div>
       <h2 className={classNames("title-h1", styles.title)}>{ name }</h2>
       <Menu menu={menu} className={styles.section}/>
       <div className={ classNames(styles.section, styles.reviewsSection )}>
          <Reviews reviews={reviews}/>
          <ReviewForm/>
        </div>
     </div>
}

export default Restaurant;