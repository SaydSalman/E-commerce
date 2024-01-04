import React, { useEffect } from 'react'
import { Row,Col, Card, Button,Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/Slices/productSlice'
import wishlistSlice, { addToWishlist } from '../Redux/Slices/wishlistSlice'
import { addToCart } from '../Redux/Slices/cartSlice'


function Home() {
  const dispatch = useDispatch()
  const {loading,products,error} = useSelector((state)=>state.productSlice)
  const {wishlist} = useSelector((state)=>state.wishlistSlice)
  
  useEffect(()=>{
    dispatch(fetchProducts())
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
    <div style={{marginTop:'80px'}}>
    {
      loading?<div className='text-center mt-5 d-flex justify-content-center'><Spinner className='me-3' animation="border" variant="danger" />Loading...</div>:
      <Row className='mt-5 ms-3 container-fluid '>
        {products.length>0&&products.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem' }}>
      <Link to={`/view/${product.id}`}><Card.Img className='img-fluid' style={{height:'200px'}} variant="top" src={product.thumbnail} /></Link>
      <Card.Body>
        <Card.Title style={{height:'30px'}} className='text-center'>{product.title.slice(0,20)}...</Card.Title>
        
        <div className='d-flex justify-content-between'>
          <button onClick={()=>handleWishlist(product)} className="btn  fs-5"><i className="fa-solid fa-heart text-danger"></i></button>
          <button onClick={()=>dispatch(addToCart(product))} className='btn  fs-5'><i className="fa-solid fa-cart-plus text-success"></i></button>
        </div>
      </Card.Body>
    </Card>
        </Col>
        ))}
      </Row>
    }
      
    </div>
  )
}

export default Home
