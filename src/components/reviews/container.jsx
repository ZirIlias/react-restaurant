import { useGetReviewsQuery } from "../../store/services/api";
import Reviews from "./component";

const ReviewsContainer = ( {restaurantId} ) => {
    const { data, isLoading } = useGetReviewsQuery(restaurantId);

    if (isLoading)
        return 'Reviews loading';

    return <Reviews reviews={data} />
}

export default ReviewsContainer;