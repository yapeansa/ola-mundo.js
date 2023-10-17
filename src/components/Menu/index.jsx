import styles from "./Menu.module.css"
import MenuLink from "../MenuLink"

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink para="/">
                    Início
                </MenuLink>
                <MenuLink para="/sobre">
                    Sobre Mim
                </MenuLink>

            </nav>
        </header>
    )
}

export default Menu
