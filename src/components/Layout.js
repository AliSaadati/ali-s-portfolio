import React, { useState, useEffect } from 'react'
import Toolbar from './Toolbar';
import Footer from './Footer';

const Layout = (props) => {
    
    return ( 
        <>
        <Toolbar />
        {props.children}
        <Footer />
        </>
    )

}

export default Layout;