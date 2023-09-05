import { styled } from "styled-components";
import { SunDim } from "@phosphor-icons/react";


const LightMode = () => {

    return (
        <>
            <BtnLight href="/dark">
                <SunDim alt="Uma svg de um sol" size={36}/>
            </BtnLight>
        </>
    );
}

const BtnLight = styled.a`
    position: absolute;
    z-index: 100;
    top: .5rem;
    right: .5rem;
    color: #434343;

    &:hover,
    &:focus {
        transform: scale(1.02);
        filter: drop-shadow(0 1rem 1.5rem #00000060);
    }
    
    &:active {
        transform: scale(1.01);
        filter: drop-shadow(0 .8rem 1.2rem #00000050);
    }
`

export default LightMode;
