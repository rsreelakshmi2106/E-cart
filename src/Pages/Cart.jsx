import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';

function Cart() {

    const cartArray = useSelector((state) => state.cartreducer)
    console.log(cartArray);

    // const total = cartArray.reduce((a,s)=>a+s.price,0)
    // console.log(total);

    const [cartTotal,setCartTotal]=useState('')
    const getCartTotal = ()=>{
        if(cartArray.length>0){
            setCartTotal(cartArray.map(item=>item.price).reduce((a,s)=>a+s))
        }
        else{
            setCartTotal(0)
        }
    }

    const dispatch = useDispatch()

    const handleCartOrder = ()=>{
        dispatch(emptyCart())
        alert("You order has been placed")
    }
    useEffect(()=>{
        getCartTotal()
    },[cartArray])

    return (

        <div>
            <div className="row m-5">
                <div className="col-md-6">

                    <table border="2" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th className='px-2'>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cartArray?.length > 0 ? cartArray.map((item,index) => (
                                    <tr>
                                        <td className='px-2'>{index+1}</td>
                                        <td>{item.title}</td>
                                        <td className='p-3'><img src={item.thumbnail}  style={{ width: '100px', height: 'auto' }} /></td>
                                        <td>{item.price}</td>
                                        <td><i onClick={()=>dispatch(deleteFromCart(item.id))} className="fa-solid fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i></td>
                                    </tr>
                                )) : <tr>null</tr>
                            }

                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <div className="container shadow text-center p-5">
                        <h2><b>Cart Summary</b></h2><br />
                        <h5>Total Cart Items : {cartArray.length}</h5>
                        <h5>Total Price : {cartTotal}</h5>
                        <button onClick={()=>handleCartOrder()} className='btn mt-3'>Check Out Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart