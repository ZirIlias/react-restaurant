import MenuItem from "../menuItem/MenuItem";

const Menu = ( {menu}) => {
    return <>
        <h3>Меню</h3>
        <ul>
            {menu.map( ( dish ) => (
                <li key={dish.id}>
                    <MenuItem dish={dish}/>
                </li>
            ))}
        </ul>
    </>    
}

export default Menu;