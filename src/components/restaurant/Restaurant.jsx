const Restaurant = ( { restaurant: {name, menu, reviews} } ) => {
	return <div>
       <h2>{ name }</h2>
       <h3>Меню</h3>
       <ul>
	       	{menu.map( ( {id, name, price, ingredients}) => (
	         <li key={id}>
	         	<strong>{ name }</strong> / <i>{price} $</i>
	         	<p>Ингредиенты:</p>
	         	<ul>
			       	{ingredients.map( (ingredient, index) => (
	         			<li key={`${id}-${index}`}>
			       			{ingredient}
			         	</li>
			       	))}
	         	</ul>
	         </li>       		
	       	))}
       </ul>
       <h3>Отзывы</h3>
       <ul>       		
	       	{reviews.map( ( {id, user, text, rating}) => (
	         <li key={id}>
	         	<p><strong>{ user }</strong> / <i>{rating} star</i></p>
	         	<p>{text}</p>
	         </li>       		
	       	))}
       </ul>
     </div>
}

export default Restaurant;