import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'




function View() {
  const {id} = useParams()
  const {loading} = useSelector((state)=>state.productSlice)
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)
  const [product,setProduct] = useState({})
  const dispatch = useDispatch()
  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("products"))
    setProduct(products.find(product=>product?.id==id))
  },[])
  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
    if(existingProduct){
      alert("product already exists")
    }else{
      dispatch(addToWishlist(product))
    }
  }
  return (
    <>
    <Header/>
      <div className='mt-5 container'>
        {loading?<div className='text-center mt-5 d-flex justify-content-center'><Spinner className='me-3' animation="border" variant="danger" />Loading...</div>:
          <div className="row mt-5 align-items-center">
          <div className="col-md-4">
            <img style={{height:'400px',width:'100%'}} src={product?.thumbnail} alt="product" />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-6">
            <p>PID: {product.id}</p>
            <h2 style={{height:'45px'}}>{product?.title}</h2>
            <h5 style={{height:'30px'}} className='fw-bolder'>$ {product?.price}</h5>
            <p style={{textAlign:'justify'}}><span className='fw-bolder text-dark'>Description :</span> {product?.description}</p>
            <div className='d-flex justify-content-between mt-4'>
            <Button onClick={()=>handleWishlist(product)} className="btn btn-outline-dark fs-5"><i className="fa-solid fa-heart text-danger"></i> Wishlist</Button>
            <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline-dark fs-5'><i className="fa-solid fa-cart-plus text-success"></i> Cart</Button>
          </div>
          </div>
        </div>}
      </div>
    </>
   
  )
}

export default View
