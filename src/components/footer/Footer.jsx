import classNames from "classnames"
import Button from "../../ui/button/Button"
import styles from './Footer.module.scss'

const Footer = function({className}) {
  return (
    <div className={ classNames( styles.footer, className) }>
        <div className="container">
                <Button>Контакты</Button>
        </div>
    </div>
  )
}

export default Footer