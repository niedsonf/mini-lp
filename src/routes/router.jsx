import React from "react";
import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/paginaPrincipal'

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/obrigado" element={<div>obg</div>} />
        </Routes>
    )
}