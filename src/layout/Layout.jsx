import classNames from "classnames"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import styles from "./Layout.module.scss";

const Layout = function( {children, className}) {
  return (
    <div className={ classNames( className) }>
        <Header></Header>
        <div className={styles.body}>
          {children}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Layout