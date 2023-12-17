import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext/hooks";
import Button from "../../ui/button/Button"
import styles from './Header.module.scss'
import classNames from "classnames";

const Header = function( {className}) {

  const navigate = useNavigate();
  const {theme, setTheme} = useTheme();
  
  function changeTheme() {
    setTheme( theme == 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={ classNames(styles.header, className) } >
        <div className="container">
            <div className={styles.buttons}>
                <Button onClick={ () => navigate("/") }>Главная</Button>
                <NavLink
                  to="/restaurants"
                  className={({ isActive }) =>
                    classNames(styles.link, {
                      [styles.active]: isActive,
                    })
                  }><Button>Рестораны</Button></NavLink>
                <Button color="blue" onClick={ changeTheme }>Смена темы</Button>
            </div>
        </div>
    </div>
  )
}

export default Header