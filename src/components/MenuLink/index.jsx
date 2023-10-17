import { NavLink } from "react-router-dom"
import styles from "./MenuLink.module.css"

function MenuLink({ children, para }) {
    return (
        <NavLink to={para} className={({ isActive }) => isActive ? `${styles.link} ${styles.linkdestacado}` : styles.link}>
            {children}
        </NavLink>
    )
}

export default MenuLink
