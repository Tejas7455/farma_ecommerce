import React, { useContext, useEffect, useState, useRef } from 'react';
import logo from '../logo.svg';
import { NavLink, useParams } from 'react-router-dom';
import SingleRelatedProducts from './SingleRelatedProducts';
import { CartContext, UserContext } from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function ProductDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const { product_id } = useParams();

  const [productData, setProductData] = useState({});
  const [productImgs, setProductImgs] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);

  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);

  const scrollRef = useRef(null);

  /* ---------------- SCROLL ---------------- */

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  /* ---------------- USE EFFECT ---------------- */

  useEffect(() => {
    if (product_id) {
      fetchData(`${baseUrl}/product/${product_id}/`);
      fetchRelatedData(`${baseUrl}/related-products/${product_id}/`);
      checkProductInCart(Number(product_id));
    }
  }, [product_id]);

  /* ---------------- FETCH ---------------- */

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProductData(data);
        setProductImgs(data.product_imgs || []);
        setProductTags(data.tag_list || []);
      })
      .catch(err => console.error(err));
  }

  function fetchRelatedData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => setRelatedProducts(data.results || []))
      .catch(err => console.error(err));
  }

  /* ---------------- CART ---------------- */

  function checkProductInCart(id) {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];

    const exists = cart.some(
      item => Number(item?.product?.id) === Number(id)
    );

    setCartButtonClickStatus(exists);
  }

  const cartAddButtonHandler = () => {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];

    const alreadyExists = cart.some(
      item => Number(item.product.id) === Number(productData.id)
    );

    if (!alreadyExists) {
      const updatedCart = [
        ...cart,
        {
          product: {
            id: productData.id,
            title: productData.title,
            price: productData.price,
            image: productData.image || logo,
          },
          user: { id: 1 },
        },
      ];

      localStorage.setItem('cartData', JSON.stringify(updatedCart));

      if (cartContext?.setCartData) {
        cartContext.setCartData(updatedCart);
      }

      setCartButtonClickStatus(true);
    }
  };

  const cartRemoveButtonHandler = () => {
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];

    const updatedCart = cart.filter(
      item => Number(item.product.id) !== Number(productData.id)
    );

    localStorage.setItem('cartData', JSON.stringify(updatedCart));

    if (cartContext?.setCartData) {
      cartContext.setCartData(updatedCart);
    }

    setCartButtonClickStatus(false);
  };

  /* ---------------- WISHLIST ---------------- */

  function saveInWishList() {
    const customerId = localStorage.getItem('customer_id');
    if (!customerId) return;

    const formData = new FormData();
    formData.append('customer', customerId);
    formData.append('product', productData.id);

    axios.post(`${baseUrl}/wishlist/`, formData).catch(err => console.error(err));
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
          <div className="carousel carousel-dark slide">
            <div className="carousel-inner text-center">
              {productImgs.map((img, index) => (
                <div
                  key={img.id || img.image}
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
          <h3>{productData.title}</h3>
          <p className="text-muted">{productData.detail}</p>

          <h4 className="text-success">
            Rs. {Number(productData.price).toLocaleString('en-IN')}
          </h4>

          <div className="d-flex flex-wrap gap-2 my-3">
            <a
              href={productData.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-sm"
            >
              Demo
            </a>

            {!cartButtonClickStatus ? (
              <button
                onClick={cartAddButtonHandler}
                className="btn btn-primary btn-sm"
              >
                Add to Cart
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

            {userContext?.login ? (
              <button
                onClick={saveInWishList}
                className="btn btn-danger btn-sm"
              >
                Wishlist
              </button>
            ) : (
              <button className="btn btn-danger btn-sm" disabled>
                Wishlist
              </button>
            )}
          </div>

          <hr />

          <h6>Tags</h6>
          <div className="d-flex flex-wrap">{tagsLinks}</div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Related Products</h3>
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
                  flex: '0 0 25%',
                  maxWidth: '25%',
                  padding: '8px',
                }}
              >
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
