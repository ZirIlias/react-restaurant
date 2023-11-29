import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ( {children, onClick, color = "green", type = "rectangle", active = false, className, ...props} ) => {

	return <button onClick={onClick} className={classNames(styles[color], styles[type], { [styles.active]: active}, className )} {...props}>{children}</button>;
}

export default Button;