import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/inicio"
import Sobre from "./paginas/sobre"
import Menu from "./components/Menu"
import Rodape from "./components/Rodape"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<div>Página não encontrada.</div>} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes
