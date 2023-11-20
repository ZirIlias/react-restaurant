import Menu from "../menu/Menu";
import Reviews from "../reviews/Reviews";

const Restaurant = ( { restaurant: {name, menu, reviews} } ) => {
	return <div>
       <h2>{ name }</h2>
       <Menu menu={menu}/>
	   <Reviews reviews={reviews}/>
     </div>
}

export default Restaurant;