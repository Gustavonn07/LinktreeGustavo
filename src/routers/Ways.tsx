import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Light  from "../pages/Light";
import Dark  from "../pages/Dark";
import NotFound  from "../pages/NotFound";
import PageLayout from "../layout/PageLayout";
import Botoes from "../components/Botoes";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout />}>
                            <Route index element={
                                <Light>
                                    <Botoes
                                     texto="Github"
                                     link="https://github.com/Gustavonn07"
                                    />
                                    <Botoes
                                     texto="Linkedin"
                                     link="https://www.linkedin.com/in/gustavo-nepomuceno/"
                                    />
                                    <Botoes
                                     texto="Instagram"
                                     link="https://www.instagram.com/_gustavonep/"
                                    />
                                </Light>
                            } />
                            
                            <Route path="/dark" element={
                                <Dark>
                                    <Botoes
                                     texto="Github"
                                     link="https://github.com/Gustavonn07"
                                    />
                                    <Botoes
                                     texto="Linkedin"
                                     link="https://www.linkedin.com/in/gustavo-nepomuceno/"
                                    />
                                    <Botoes
                                     texto="Instagram"
                                     link="https://www.instagram.com/_gustavonep/"
                                    />  
                                </Dark>
                            } />
                        </Route>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default Ways;