import { Outlet } from "react-router-dom"
import Banner from "../Banner"

const PaginaPadrao = ({ children }) => {
    return (
        <main>
            <Banner />
            <Outlet />
            {children}
        </main>
    )
}

export default PaginaPadrao
