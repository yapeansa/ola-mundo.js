import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/sobre";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import PaginaPadrao from "./components/PaginaPadrao";
import Post from "./paginas/post";
import NotFound from "./paginas/notfound";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Menu />
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route index element={<Inicio />} />
                    <Route path="sobre" element={<Sobre />} />
                </Route>
                <Route path="/posts/:id" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    );
};

export default AppRoutes;
