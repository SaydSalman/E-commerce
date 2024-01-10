import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCart } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'



function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state=>state.cartReducer)
  const [cartAmount,setCartAmount] = useState(0)
  useEffect(()=>{
    if(cart?.length>0){
      setCartAmount(cart?.map(product=>product?.totalPrice).reduce((p1,p2)=>p1+p2))
    }else{
      setCartAmount(0)
    }
  },[cart])
  const handleCheckout = ()=>{
    alert("Your order has scuccessfully placed... Thank Your for Purchasing with US")
    dispatch(emptyCart())
    navigate('/')

  }
  const handleDecrement = (product)=>{
    if(product.quantity==1){
      dispatch(removeCart(product.id))
    }else{
      dispatch(decQuantity(product))
    }
  }
  return (
   <>
   <Header/>
      <div className='container mt-5'>
        {cart?.length>0?
          <div className="row mt-5">
          <div className="col-lg-8">
          <h3 style={{height:'35px'}}>Cart Summary</h3>
            <table className='table shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product,index)=>(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{product.title}</td>
                  <td><img style={{height:'60px',width:'60px'}} src={product.thumbnail} alt="" /></td>
                  <td><div className='d-flex'>
                  <button onClick={()=>handleDecrement(product)} className='btn'>-</button>
                  <input style={{width:'70px'}} type="text" className='form-control' value={product.quantity} readOnly />
                  <button onClick={()=>dispatch(incQuantity(product))} className='btn'>+</button>
                  </div></td>
                  <td>$ {product.totalPrice}</td>
                  <td><button onClick={()=>dispatch(removeCart(product.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
                ))
                  }
              </tbody>
            </table>
            <div className='float-end'>
              <button  onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>Empty Cart</button>
              <Link to={'/'} className='btn btn-primary'>Shop More</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-column border rounded p-4">
              <h5 style={{height:'30px'}}>Total Product: <span className='fw-bolder'>{cart?.length}</span></h5>
              <h4 style={{height:'30px'}}>Total Amount: <span className='text-danger fw-bolder'>$ {cartAmount}</span></h4>
              <hr />
              <div className='d-grid'>
                <button onClick={()=>handleCheckout()} className='btn btn-success'>Checkout</button>
              </div>
            </div>
          </div>
        </div>:
        <div className='text-center mt-5'>
          <img width={'25%'} height={'200px'} src="data:image/jpeg;base64,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" alt="" />
            <h1>Your Cart is Empty!!</h1>
            <Link to={'/'} className='btn btn-success'>Click here to shop More</Link>
          </div>
        }
      </div>
   </>
  
  )
}

export default Cart
