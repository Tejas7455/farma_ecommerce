import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

import SingleProduct from './SingleProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetchData(baseUrl + '/products/fetch_limit=4');
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
      });
  }

  return (
    <main className="container mt-5">

      {/* ================= Latest Products ================= */}
      <h3 className="mb-4">
        Latest Products
        <NavLink to="/products" className="float-end btn btn-sm btn-secondary">
          View All Products <i className="fa-solid fa-arrow-right-long"></i>
        </NavLink>
      </h3>

      <div className="row">
        {(showMore ? products : products.slice(0, 4)).map(product => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>

      {products.length > 4 && !showMore && (
        <div
          className="text-center mt-3"
          onClick={() => setShowMore(true)}
          style={{ cursor: 'pointer', color: '#0d6efd', fontWeight: 500 }}
        >
          Show More <i className="fa-solid fa-angle-down"></i>
        </div>
      )}

      {/* ================= Popular Categories ================= */}
      <h3 className="my-5">
        Popular Category
        <NavLink to="/categories" className="float-end btn btn-sm btn-secondary">
          View All Category <i className="fa-solid fa-arrow-right-long"></i>
        </NavLink>
      </h3>

      <div className="row">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
            <div
              className="card h-100 border-0 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #e3f2fd, #ffffff)'
              }}
            >
              <img
                src={logo}
                alt="category"
                style={{
                  height: '180px',
                  objectFit: 'contain',
                  padding: '15px'
                }}
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold">Product title</h5>
              </div>
              <div
                className="card-footer text-center"
                style={{ backgroundColor: '#f1f3f5' }}
              >
                Product Download: 100
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Popular Products ================= */}
      <h3 className="my-5">
        Popular Products
        <NavLink to="#" className="float-end btn btn-sm btn-secondary">
          View All Popular Products <i className="fa-solid fa-arrow-right-long"></i>
        </NavLink>
      </h3>

      <div className="row">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3 mb-4">
            <div
              className="card h-100 border-0 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #e9f7ef, #ffffff)'
              }}
            >
              <img
                src={logo}
                alt="popular"
                style={{
                  height: '180px',
                  objectFit: 'contain',
                  padding: '15px'
                }}
              />
              <div className="card-body text-center">
                <h5 className="fw-semibold">Product title</h5>
              </div>
              <div
                className="card-footer text-center"
                style={{ backgroundColor: '#f1f3f5' }}
              >
                Product Download: 100
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}

export default Home;
