import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import "./Navigation.css";

function HomePage() {
    return <div className="HomePage">🏠 Page</div>;
}

function NotFoundPage() {
    return <div className="404">404 - not found</div>;
}

function ApplePage() {
    return <div className="ApplePage">🍎 Page</div>;
}

export default function Navigation() {
    return (
        <BrowserRouter>
            <div className="nav">
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/apple" className="link">
                    Apple
                </Link>
                <Link to="/applet" className="link">
                    Applet
                </Link>
                <Link to="/test" className="link">
                    Test
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="/apple" element={<ApplePage />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
        </BrowserRouter>
    );
}