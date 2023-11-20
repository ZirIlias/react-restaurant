import Button from "../../ui/button/Button";

const RestaurantTabs = ( {restaurants} ) => {
    return <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        {restaurants.map((restaurant) => (
            <Button key={restaurant.id}>
                {restaurant.name}
            </Button>
        ))}
    </div>;
}

export default RestaurantTabs;