import React from 'react'
import NavbarMin from '../components/NavbarMin';
import NavbarMain from '../components/NavbarMain';
import Categories from './Categories';

const Layout = ({ children }) => {
    return (
        <div>
            <NavbarMin />
            <NavbarMain />
            <Categories />
            { children }
        </div>
    )
}

export default Layout
