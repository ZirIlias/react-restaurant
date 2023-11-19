import Button from "../../ui/button/Button";

const Restaurants = ( {restaurants} ) => {
    return <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
        {restaurants.map((restaurant) => (
                <Button key={restaurant.id} value={restaurant.name} />
        ))}
    </div>;
}

export default Restaurants;