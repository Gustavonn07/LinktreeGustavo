import { styled } from "styled-components";
// import { useState } from "react";
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
    top: 25.5rem;
    right: .5rem;
    color: #434343;
`

export default LightMode;
