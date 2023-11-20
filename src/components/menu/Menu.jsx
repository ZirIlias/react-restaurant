import Dish from "../dish/Dish";

const Menu = ( {menu}) => {
    return <>
        <h3>Меню</h3>
        <ul>
            {menu.map( ( dish ) => (
                <li key={dish.id}>
                    <Dish dish={dish}/>
                </li>
            ))}
        </ul>
    </>    
}

export default Menu;