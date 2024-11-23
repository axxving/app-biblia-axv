import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Page } from '../page/Page';

export const RouteMe = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* Home */}
                    <Route path="/" element={<Page />} />
                </Routes>
            </Router>
        </>
    );
};
