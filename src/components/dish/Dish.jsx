const Dish = ( {dish} ) => {
    if (!dish)
        return;
    
    const {name, price, ingredients} = dish ?? {};
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