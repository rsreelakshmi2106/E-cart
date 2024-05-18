import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

    const wishlistArray = useSelector((state) => state.wishlistreducer)
    console.log(wishlistArray);

    const cartArray = useSelector((state)=>state.cartreducer)
    console.log(cartArray);

    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        ShopNShop
                    </MDBNavbarBrand>
                    <span style={{ textAlign: 'right', fontSize: 'x-large' }}>
                        <Link to="/wishlist" style={{ textDecoration: 'none' }}>
                            
                            <i class="fa-solid fa-heart mx-2" style={{ color: 'red' }}>
                                <br />
                                <div style={{ fontSize: 'small' }} className='btn mt-2 p-2 rounded-2 text-center shadow text-dark'>{wishlistArray.length}</div>
                            </i>
                        </Link>
                        <Link to="/cart" style={{ textDecoration: 'none' }}>
                            <i class="fa-solid fa-cart-plus mx-3" style={{ color: 'green' }}>
                                <br />
                                <div style={{ fontSize: 'small' }} className='btn mt-2 p-2 rounded-2 text-center shadow text-dark'>{cartArray.length}</div>
                            </i>
                        </Link>
                    </span>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header