import Button from "../../ui/button/Button";
import classNames from "classnames";
import buttonStyles from "../../ui/button/Button.module.scss";
import { useTheme } from "../../context/ThemeContext/hooks";

const RestaurantTab = ( {onTabClick, active, className, children} ) => {

    const {theme} = useTheme();
    
    return <Button onClick={ onTabClick } active={ active } className={ classNames(buttonStyles[theme], className) }>
        {children}
    </Button>;
}

export default RestaurantTab;