import { styled } from "styled-components";
import { ReactNode } from "react";
import LightMode from "../../components/Lightmode";

type LightProps = {
    children: ReactNode
}

const Light = ({ children }: LightProps) => {

    return (
        <>
            <Fundo>
                <LightMode />
                {children}
            </Fundo>
        </>
    );
}

const Fundo = styled.section`
    position: relative;
    z-index: 1;
    background-image:
                    linear-gradient(180deg, #3b3b3b22 50%, #5e6268 50%)
                    , url(../../images/manha.jpg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 142vh;
    top: -72vh;
`

export default Light;
