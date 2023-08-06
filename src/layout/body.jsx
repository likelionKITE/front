import React from 'react';
import Header from './header/body';
import Footer from './footer/body';

function Layout({ children }) {
    return (
        <div>
            <Header/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;