import React from 'react';
import Header from './header/body';
import Footer from './footer/body';
import { Content } from "./style";

function Layout({ children, isSignedIn, currentUser, handleLogout }) {
    return (
        <div>
            <Header
                isSignedIn={isSignedIn}
                currentUser={currentUser}
                handleLogout={handleLogout}
            />
            <Content>
                {children}
            </Content>
            <Footer />
        </div>
    );
}

export default Layout;