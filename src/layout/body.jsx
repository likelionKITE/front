import React from 'react';
import Header from './header/body';
import Footer from './footer/body';
import { Content } from "./style";

function Layout({ children }) {
    return (
        <div>
            <Header/>
            <Content>
                {children}
            </Content>
            <Footer />
        </div>
    );
}

export default Layout;