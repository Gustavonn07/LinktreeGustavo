import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { styled } from 'styled-components';

const PageLayout = () => {

    return (
        <>
            <Container>
                <Container__Page>
                    <Header
                        imagem="../../images/Gustavo.jpg"
                        textoAux="Imagem de Gustavo Nepomuceno na praia, usando um boné e blusa preta com detalhes brancos."
                    />
                    <Outlet />
                    <Footer />
                </Container__Page>
            </Container>
        </>
    );
}

const Container = styled.div`
    
    @media only screen and (min-width: 40rem) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #8d8e9b;
        position: relative;
        overflow: hidden;

        &::after {
            content: "";
            position: absolute;
            width: 50rem;
            height: 50rem;
            border-radius: 100%;
            border: 1.5rem solid #44adbb;
            top: 20%;
            right: -20%;
            box-shadow:  0 0 3rem #44adbb, inset 0 0 3rem #44adbb;
        }

        &::before {
            content: "";
            position: absolute;
            width: 35rem;
            height: 35rem;
            border-radius: 100%;
            border: 1.5rem solid #44adbb;
            top: -5%;
            left: -8%;
            box-shadow:  0 0 3rem #44adbb, inset 0 0 3rem #44adbb;
        }
    }
`

const Container__Page = styled.div`
    
    @media only screen and (min-width: 40rem) {
        width: 50%;
        box-shadow: 0 1rem 1.5rem #00000060;
        position: relative;
    }
`

export default PageLayout;