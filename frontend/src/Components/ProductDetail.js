import React, { useContext, useEffect, useState } from 'react';
import logo from '../logo.svg';
import { NavLink, useParams } from 'react-router-dom';
import SingleRelatedProducts from './SingleRelatedProducts';
import { CartContext, UserContext } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { useRef } from 'react';

function ProductDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const { product_id } = useParams();

  const [productData, setProductData] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);

  const { setCartData } = useContext(CartContext);
  const userContext = useContext(UserContext);
  

/* INSIDE ProductDetail COMPONENT */
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };


  useEffect(() => {
    fetchData(`${baseUrl}/product/${product_id}/`);
    fetchRelatedData(`${baseUrl}/related-products/${product_id}/`);
    checkProductInCart(product_id);
  }, [product_id]);

  /* ---------------- FETCH ---------------- */

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
        setProductImgs(data.product_imgs || []);
        setProductTags(data.tag_list || []);
      });
  }

  function fetchRelatedData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => setRelatedProducts(data.results || []));
  }

  /* ---------------- CART ---------------- */

  function checkProductInCart(id) {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];
    setCartButtonClickStatus(
      cart.some(item => item?.product.id == id)
    );
  }

  const cartAddButtonHandler = () => {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];

    cart.push({
      product: {
        id: productData.id,
        title: productData.title,
        price: productData.price,
        image: productData.image || logo
      },
      user: { id: 1 }
    });

    localStorage.setItem('cartData', JSON.stringify(cart));
    setCartData(cart);
    setCartButtonClickStatus(true);
  };

  const cartRemoveButtonHandler = () => {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];
    const updatedCart = cart.filter(
      item => item.product.id !== productData.id
    );

    localStorage.setItem('cartData', JSON.stringify(updatedCart));
    setCartData(updatedCart);
    setCartButtonClickStatus(false);
  };

  /* ---------------- WISHLIST ---------------- */

  function saveInWishList() {
    const customerId = localStorage.getItem('customer_id');
    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('product', productData.id);

    axios.post(`${baseUrl}/wishlist/`, formData);
  }

  if (!productData.id) return null;

  /* ---------------- TAGS ---------------- */

  const tagsLinks = productTags.map((tag, index) => (
    <NavLink
      key={index}
      className="badge bg-secondary text-white me-2 mb-2"
      to={`/products/${tag.trim()}`}
    >
      {tag}
    </NavLink>
  ));

  return (
    <section className="container mt-4">
      <div className="row g-4">
        {/* IMAGE */}
        <div className="col-md-5">
          <div
            id="productThumbnailSlider"
            className="carousel carousel-dark slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner text-center">
              {productImgs.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={img.image}
                    className="img-fluid rounded"
                    style={{ maxHeight: '350px', objectFit: 'contain' }}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="col-md-7">
          <h3 className="mb-2">{productData.title}</h3>
          <p className="text-muted">{productData.detail}</p>

          <h4 className="text-success mb-3">
            Rs. {Number(productData.price).toLocaleString('en-IN')}
          </h4>

          <div className="d-flex flex-wrap gap-2 mb-4">
            <a
              href={productData.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm"
            >
              <i className="fa-solid fa-video"></i> Demo
            </a>

            {!cartButtonClickStatus ? (
              <button
                onClick={cartAddButtonHandler}
                className="btn btn-primary btn-sm"
              >
                <i className="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
            ) : (
              <button
                onClick={cartRemoveButtonHandler}
                className="btn btn-warning btn-sm"
              >
                Remove from Cart
              </button>
            )}

            <button className="btn btn-success btn-sm">
              Buy Now
            </button>

            {userContext.login ? (
              <button
                onClick={saveInWishList}
                className="btn btn-danger btn-sm"
              >
                <i className="fa fa-heart"></i> Wishlist
              </button>
            ) : (
              <button className="btn btn-danger btn-sm" disabled>
                Wishlist
              </button>
            )}
          </div>

          <hr />

          <h6 className="mb-2">Tags</h6>
          <div className="d-flex flex-wrap">{tagsLinks}</div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
    {relatedProducts.length > 0 && (
      <section style={{ marginTop: '60px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <h3 style={{ margin: 0 }}>Related Products</h3>

          <div>
            <button
              onClick={scrollLeft}
              className="btn btn-outline-secondary btn-sm me-2"
            >
              ◀
            </button>
            <button
              onClick={scrollRight}
              className="btn btn-outline-secondary btn-sm"
            >
              ▶
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            overflow: 'hidden',
            scrollBehavior: 'smooth',
          }}
        >
          {relatedProducts.map(product => (
            <div
              key={product.id}
              style={{
                flex: '0 0 25%',        // EXACTLY 4 ITEMS
                maxWidth: '25%',
                padding: '8px',
                boxSizing: 'border-box',
              }}
            >
              {/* Card wrapper for equal height */}
              <div
                style={{
                  height: '100%',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '10px',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <SingleRelatedProducts product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>
    )}




    </section>
  );
}

export default ProductDetail;
