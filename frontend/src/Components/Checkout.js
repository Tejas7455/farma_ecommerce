import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context';

function Checkout(props) {
    const { cartData, setCartData } = useContext(CartContext);

    // Total cart items
    const cartItems = cartData?.length || 0;

    // Total amount
    const sum =
        cartData?.reduce(
            (total, item) => total + parseFloat(item.product.price),
            0
        ) || 0;

    // Remove item from cart
    const cartRemoveButtonHandler = (product_id) => {
        const previousCart = JSON.parse(localStorage.getItem('cartData')) || [];

        const updatedCart = previousCart.filter(
            (cart) => cart.product.id !== product_id
        );

        localStorage.setItem('cartData', JSON.stringify(updatedCart));
        setCartData(updatedCart);
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">All Items ({cartItems})</h3>

            {cartItems !== 0 && (
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Products</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartData.map((item, index) => (
                                        <tr key={item.product.id}>
                                            <td>{index + 1}</td>

                                            <td>
                                                <NavLink to={`/product/${item.product.id}`}>
                                                    <img
                                                        src={item.product.image}
                                                        className="img-thumbnail"
                                                        width="80"
                                                        alt={item.product.title}
                                                    />
                                                </NavLink>

                                                <p>
                                                    <NavLink to={`/product/${item.product.id}`}>
                                                        {item.product.title}
                                                    </NavLink>
                                                </p>
                                            </td>

                                            <td>Rs.{item.product.price}</td>

                                            <td>
                                                <button
                                                    title="Remove from Cart"
                                                    type="button"
                                                    onClick={() =>
                                                        cartRemoveButtonHandler(item.product.id)
                                                    }
                                                    className="btn btn-warning btn-sm ms-1"
                                                >
                                                    <i className="fa-solid fa-cart-plus"></i>{' '}
                                                    Remove from Cart
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Total Amount</th>
                                        <th>Rs.{sum}</th>
                                        <th></th>
                                    </tr>

                                    <tr>
                                        <td colSpan="3" align="center">
                                            <NavLink
                                                to="/"
                                                className="btn btn-primary"
                                            >
                                                Continue Shopping
                                            </NavLink>

                                            <NavLink
                                                to="/confirm-order"
                                                className="btn btn-success ms-2"
                                            >
                                                Proceed to Payment
                                            </NavLink>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {cartItems === 0 && (
                <NavLink to="/" className="btn btn-success">
                    Continue Shopping
                </NavLink>
            )}
        </div>
    );
}

export default Checkout;
