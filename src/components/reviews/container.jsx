import { useGetReviewsQuery } from "../../services/api";
import Reviews from "./component";

const ReviewsContainer = ( {restaurantId} ) => {
    const { data, isFetching } = useGetReviewsQuery(restaurantId);

    if (isFetching)
        return null;

    return <Reviews reviews={data} />
}

export default ReviewsContainer;