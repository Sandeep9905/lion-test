import React from 'react';
import Navbar from './Navbar';
import Products from './Products';

export default function ListProducts(props) {
    const { id } = props;
    return (
        <>
            <Navbar edit makeLogout={props.logout} id={id} />
            <Products />
        </>
    )
}