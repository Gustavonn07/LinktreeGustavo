import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Light  from "../pages/Light";
import Dark  from "../pages/Dark";
import NotFound  from "../pages/NotFound";
import PageLayout from "../layout/PageLayout";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PageLayout />}>
                            <Route index element={<Light />} />
                            <Route path="/dark" element={<Dark />} />
                        </Route>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default Ways;