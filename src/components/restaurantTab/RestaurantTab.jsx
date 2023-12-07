import Button from "../../ui/button/Button";
import classNames from "classnames";
import buttonStyles from "../../ui/button/Button.module.scss";
import { useTheme } from "../../context/ThemeContext/hooks";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/features/entities/restaurant/selectors";

const RestaurantTab = ( {id, onClick, active, className} ) => {

    const {theme} = useTheme();

    const restaurant = useSelector( (state) => selectRestaurantById(state, id) );
    
    return <Button onClick={ () => onClick(id) } active={ active } className={ classNames(buttonStyles[theme], className) }>
        {restaurant.name}
    </Button>;
}

export default RestaurantTab;