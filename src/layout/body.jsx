import React from 'react';
import Header from './header/body';
import Navbar from './navbar/body';
import Footer from './footer/body';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <Navbar />

            {children}

            <Footer />
        </div>
    );
}

export default Layout;