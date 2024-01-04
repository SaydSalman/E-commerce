import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

function Header() {
  const [wishlistCount,setWishListCount] = useState(0)
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)
  const [cartCount,setCartCount] = useState(0)
  const cart = useSelector(state=>state.cartReducer)
  useEffect(()=>{
   setWishListCount(wishlist?.length)
   setCartCount(cart?.length)
  },[wishlist,cart])
  return (
    <div>
       <Navbar style={{zIndex:'1'}} expand="lg" className="bg-info position-fixed top-0 w-100 mb-5">
      <Container>
      
        <Navbar.Brand  ><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i class="fa-solid fa-truck me-2"></i>E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded' >
                <Link to={"./wishlist"} className='d-flex align-items-center' style={{textDecoration:'none',
                color:'white',fontWeight:'bold'}}>
                    <i className='fa-solid fa-heart text-danger me-2'></i>Wishlist
                    <Badge className='ms-2 rounded' bg='light'>{wishlistCount}</Badge>
                </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-5' >
                <Link to={"./cart"} className='d-flex align-items-center' style={{textDecoration:'none',
                color:'white',fontWeight:'bold'}}>
                    <i className='fa-solid fa-cart-shopping text-warning me-2'></i>Cart
                    <Badge className='ms-2 rounded' bg='light'>{cartCount}</Badge>
                </Link>
            </Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
