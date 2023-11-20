const Dish = ( {dish: {name, price, ingredients}} ) => {
    return <>
        <strong>{ name }</strong> / <i>{price} $</i>
        <p>Ингредиенты:</p>
        <ul>
            {ingredients.map( (ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
            ))}
        </ul>
    </>
}

export default Dish;