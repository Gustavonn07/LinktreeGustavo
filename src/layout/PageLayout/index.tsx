import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageLayout = () => {

    return (
        <>
            <Header
                imagem="../../images/Gustavo.jpg"
                textoAux="Imagem de Gustavo Nepomuceno na praia, usando um boné e blusa preta com detalhes brancos."
            />
            <Outlet />
            <Footer />
        </>
    );
}

export default PageLayout;