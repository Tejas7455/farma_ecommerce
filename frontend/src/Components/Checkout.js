import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { CartContext } from '../context';
import { useContext ,useState} from 'react'; 

function Checkout(props){
    const {cartData,setCartData}=useContext(CartContext);
    const [cartButtonClickStatus, setcartButtonClickStatus]=useState(false);
    const [productData, setProductData]=useState([]);
    if(cartData == null || cartData.length==0){
        var cartItems=0;
    }else{
        var cartItems=cartData.length;
    }

    var sum=0;
    if (cartItems>0){
        cartData.map((item,index)=>{
            sum+=parseFloat(item.product.price);
    });
    }

    const cartRemoveButtonHandler = (product_id) => {
    var previousCart=localStorage.getItem('cartData');
    var cartJson=JSON.parse(previousCart);
    cartJson.map((cart,index)=>{
        if(cart!=null && cart.product.id == product_id){
            //delete cartJson[index];
            cartJson.splice(index, 1);        
        }
    });

    var cartString=JSON.stringify(cartJson);
    localStorage.setItem('cartData',cartString);
    setcartButtonClickStatus(false);
    setCartData(cartJson);
    }  


    return (
        <div className='container mt-4'>
            <h3 className='mb-4'>All Items ({cartItems})</h3>
            {cartItems!=0 &&
            <div className='row'>
                <div className='col-12'>
                <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems &&
                            cartData.map((item,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>
                                        <NavLink> <img src={item.product.image} className="img-thumbail" 
                                            width="80" alt={item.product.title} /></NavLink>
                                        <p><NavLink>{item.product.title}</NavLink></p>
                                        </td>
                                        <td>Rs.{item.product.price}</td>
                                        <td>
                                        <button title="Remove from Cart" type="button" 
                                        onClick={()=>cartRemoveButtonHandler(item.product.id)}
                                            className='btn btn-warning btn-sm ms-1'>
                                            <i className="fa-solid fa-cart-plus"></i> Remove from Cart</button>
                                        </td>
                                    </tr>
                                    )
                            })
                            }             
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Total Amount</th>
                            <th>Rs.{sum}</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td colSpan='3' align='center'> 
                                    <NavLink to='/categories' className='btn btn-primary'>Continue Shopping</NavLink>
                                    <NavLink to='/confirm-order' className='btn btn-success ms-2'>Proceed to Payment</NavLink>
                            </td>   
                            <td></td>    
                        </tr>
                        <td></td>
                    </tfoot>
                </table>
            </div>
                </div>
            </div>
            }
            {cartItems==0 &&
                <NavLink to='/categories' className='btn btn-success'>Continue Shopping</NavLink>
            }
        
        </div>
  )
}

export default Checkout;