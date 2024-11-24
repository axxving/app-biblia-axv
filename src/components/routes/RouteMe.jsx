import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from '../page/Page';
import { Login } from '../app/auth/Login';
import { Register } from '../app/auth/Register';

export const RouteMe = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* Home */}
                    <Route path="/" element={<Page />} />

                    {/* Login */}
                    <Route path="/login" element={<Login />} />

                    {/* Register */}
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
};
