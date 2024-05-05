import React from 'react';
import './_layout.scss';
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <header>header</header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </>
    );
}

export default Layout;