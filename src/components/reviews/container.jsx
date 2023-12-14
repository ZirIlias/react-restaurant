import { useGetReviewsQuery } from "../../store/services/api";
import Reviews from "./component";

const ReviewsContainer = ( {restaurantId} ) => {
    const { data, isLoading } = useGetReviewsQuery(restaurantId);

    if (isLoading)
        return null;

    return <Reviews reviews={data} />
}

export default ReviewsContainer;