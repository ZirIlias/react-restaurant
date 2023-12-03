import { useTheme } from "../../context/hooks";
import Button from "../../ui/button/Button"
import styles from './Header.module.scss'
import classNames from "classnames";

const Header = function( {className}) {

  const {theme, setTheme} = useTheme();
  
  function changeTheme() {
    setTheme( theme == 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={ classNames(styles.header, className) } >
        <div className="container">
            <div className={styles.buttons}>
                <Button>Заказ</Button>
                <Button color="blue" onClick={ changeTheme }>Смена темы</Button>
            </div>
        </div>
    </div>
  )
}

export default Header