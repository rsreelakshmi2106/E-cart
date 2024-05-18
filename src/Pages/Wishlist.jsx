import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';

function Wishlist() {

    const wishlistArray = useSelector((state) => state.wishlistreducer)
    console.log(wishlistArray);

    const dispatch = useDispatch()

    const handleWishlistCart = (product)=>{
        dispatch(addToCart(product))
        dispatch(deleteFromWishlist(product.id))
    }

    return (
        <div>
            <div className="row m-5 p-5">
                {wishlistArray?.length > 0 ? wishlistArray.map((product) => (
                    <div className="col m-2" key={product.id}>
                        <MDBCard className='shadow' style={{ width: '300px', height: '450px' }}>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={product.thumbnail} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>{product.title}</MDBCardTitle>
                                <MDBCardText>
                                    {product.description}
                                    <br />
                                    Price : {product.price}
                                </MDBCardText>
                                <MDBBtn onClick={()=>dispatch(deleteFromWishlist(product.id))} className='btn ms-4'>
                                    <i className='fa-solid fa-trash text-danger fs-3'></i>
                                </MDBBtn>
                                <MDBBtn onClick={()=>handleWishlistCart(product)} className='btn ms-4'>
                                    <i className='fa-solid fa-cart-plus text-success fs-3'></i>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                )) : <h2>Null</h2>
                }
            </div>
        </div>
    )
}

export default Wishlist