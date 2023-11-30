import classNames from "classnames";
import styles from "./Ul.module.scss";

const Ul = ( {children, className} ) => {
    return <ul className={classNames(styles.ul, className)}>
        {children}
    </ul>
}

export default Ul;