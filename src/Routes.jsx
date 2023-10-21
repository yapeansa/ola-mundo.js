import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/inicio"
import Sobre from "./paginas/sobre"
import Menu from "./components/Menu"

function AppRoutes() {
    // Comentário javascript
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<div>Página não encontrada.</div>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
