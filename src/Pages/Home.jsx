import React from 'react';
import useFetch from '../Hooks/useFetch';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { addToWishlist } from '../Redux/slices/wishlistSlice'; // Adjust the path if necessary
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/slices/cartSlice';

function Home() {
  const dispatch = useDispatch();
  const result = useFetch("https://dummyjson.com/products");

  return (
    <div>
      {/* <div className='w-100'>
        <img src="https://static.vecteezy.com/system/resources/previews/002/998/319/original/summer-online-shopping-store-on-website-and-mobile-phone-design-vector.jpg" width={'100%'} alt="" />
      </div> */}
      <div className="row mx-auto">
        {result?.length > 0 ? result.map((product) => (
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
                <MDBBtn onClick={() => dispatch(addToWishlist(product))} className='btn ms-4'>
                  <i className='fa-solid fa-heart text-danger fs-3'></i>
                </MDBBtn>
                <MDBBtn onClick={()=>dispatch(addToCart(product))} className='btn ms-4'>
                  <i className='fa-solid fa-cart-plus text-success fs-3'></i>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        )) : null}
      </div>
    </div>
  );
}

export default Home;


// import React from 'react'
// import useFetch from '../Hooks/useFetch'
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple
// } from 'mdb-react-ui-kit';
// import { addToWishlist } from '../Redux/slices/wishlistSlice';
// import { useDispatch, useSelector } from 'react-redux'

// function Home() {

//   const dispatch = useDispatch()

//   const result = useFetch("https://dummyjson.com/products")
//   console.log(result);

//   return (
//     <div>
      
//       <div className="row mx-auto">
//         {
//           result?.length > 0 ? result.map((product) => (
//             <div className="col m-2">
//               <MDBCard className='shadow' style={{width:'300px',height:'450px'}}>
//                 <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//                   <MDBCardImage src={product.thumbnail} fluid alt='...' />
//                   <a>
//                     <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
//                   </a>
//                 </MDBRipple>
//                 <MDBCardBody>
//                   <MDBCardTitle>{product.title}</MDBCardTitle>
//                   <MDBCardText>
//                     {product.description}
//                     <br />
//                     Price : {product.price}
//                   </MDBCardText>
//                   <MDBBtn onClick={()=>dispatch(addToWishlist(product))} className='btn ms-4'><i className='fa-solid fa-heart text-danger fs-3'></i></MDBBtn>
//                   <MDBBtn className='btn ms-4'><i className='fa-solid fa-cart-plus text-success fs-3'></i></MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </div>
//           )) : null
//         }
//       </div>
//     </div>
//   )
// }

// export default Home