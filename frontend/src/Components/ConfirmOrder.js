import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context';
import axios from 'axios';
import { CartContext } from '../context';

const baseUrl = 'http://127.0.0.1:8000/api';

function ConfirmOrder() {
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [orderStatus, setOrderStatus] = useState(false);
    const [payMethod, setPayMethod] = useState('');
    const [transactionCompleted, setTransactionCompleted] = useState(false);

    const userContext = useContext(UserContext);
    const { cartData, setCartData } = useContext(CartContext);

    // Redirect user if not logged in
    useEffect(() => {
        if (!userContext?.login) {
            window.location.href = "/customer/login";
        }
    }, [userContext]);

    // Function to add order to database
    useEffect(() => {
        if (!confirmOrder) {
            addOrderInTable();
        }
    }, []);

    function addOrderInTable() {
        const customerId = localStorage.getItem('customer_id');
        const formData = new FormData();
        formData.append('customer', customerId);

        // Submit data
        axios.post(`${baseUrl}/orders/`, formData)
            .then((response) => {
                const orderId = response.data.id;
                setOrderId(orderId);
                orderItems(orderId);
                setConfirmOrder(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    function updateOrderStatus(order_id, order_status) {
        console.log(`Order ID: ${order_id}, Status: ${order_status}`);
        //submit data
        axios.post(`${baseUrl}/update-order-status/`+orderId)
            .then((response) => {
                window.location.href='/customer/orders'
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function orderItems(orderId) {
        let previousCart = (localStorage.getItem('cartData'))
        let cartJson=JSON.parse(previousCart)
        console.log('cartjson--',cartJson)

        if (cartJson!=null) {
            cartJson.map((cart,index) => {
                console.log('cartdetails--',cart)
                const formData = new FormData();
                
                formData.append('order', orderId);  // Ensure order ID is an integer
                formData.append('product', cart.product.id);  // Send only product ID
                formData.append('qty', 1);
                formData.append('price', cart.product.price); 
                
                axios.post(baseUrl+'/orderitems/',formData)
                // Update Local Storage & State
                .then(function(response){
                    cartJson.splice(index,1);
                    localStorage.setItem('cartData', JSON.stringify(cartJson));
                    setCartData(cartJson);
                })
                .catch(function(error){
                    console.log(error)
                });
            });
        }
    }

    function changePaymentMethod(method) {
        setPayMethod(method);
    }

    function handlePayment() {
        if (payMethod !== '') {
            setTransactionCompleted(true);
            setOrderStatus(true);
            updateOrderStatus(orderId, true);
        } else {
            alert('Select a Payment Method');
        }
    }

    

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <div className="card py-3 text-center">
                        <h2><i className="fa fa-check-circle text-success"></i> Your order has been confirmed</h2>
                        <h5>Order ID: {orderId}</h5>
                    </div>
                    <div className="card p-3 mt-4">
                        <form>
                            <div className="form-group">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="payMethod" 
                                        value="paypal"
                                        checked={payMethod === 'paypal'}
                                        onChange={() => changePaymentMethod('paypal')}
                                    /> Paypal
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="payMethod" 
                                        value="razorpay"
                                        checked={payMethod === 'razorpay'}
                                        onChange={() => changePaymentMethod('razorpay')}
                                    /> Razorpay
                                </label>
                            </div>
                            <div className="form-group">
                                <label>
                                    <input 
                                        type="radio" 
                                        name="payMethod" 
                                        value="stripe"
                                        checked={payMethod === 'stripe'}
                                        onChange={() => changePaymentMethod('stripe')}
                                    /> Stripe
                                </label>
                            </div>
                            <button 
                                type="button" 
                                onClick={handlePayment} 
                                className="btn btn-sm btn-success mt-3"
                                disabled={!payMethod} 
                            >
                                Next
                            </button>

                            {transactionCompleted && (
                                <div className="alert alert-success mt-3">
                                    Your transaction is completed.
                                    setOrderStatus(true);
                                    updateOrderStatus(orderId,orderStatus)
                                </div>
                                
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOrder;

/* restapi47*/ 
/*import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context';

function ConfirmOrder() {
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (userContext?.login == null) {
            window.location.href = "/customer/login";
        }
    }, [userContext]);

    return (
        <div>
            
            {userContext?.login && (
                <h1>Order Confirmed</h1>
            )}
        </div>
    );
}

export default ConfirmOrder;*/