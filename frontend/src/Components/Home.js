import React, { useEffect, useState } from 'react'
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

    <main className='container col-12 mt-5'>
      <div className='container'>
        <div className='container'>
          <h3 className='mb-5'>
            Latest Products
            <NavLink to='/products' className='float-end btn btn-sm btn-secondary'>
              View All Products <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
          </h3>
          <div className="row mb-4">
            {
              (showMore ? products : products.slice(0, 4)).map(product => (
                <SingleProduct key={product.id} product={product} />
              ))
            }
          </div>

          {
            products.length > 4 && !showMore && (
              <div
                className="text-center"
                onClick={() => setShowMore(true)}
                style={{ cursor: 'pointer', color: '#0d6efd', fontWeight: '500' }}
              >
                Show More <i className="fa-solid fa-angle-down"></i>
              </div>
            )
          }


        </div>

        {/* End Latest product */}

        {/* Popular Category */}
        <h3 className='mb-4'>Popular Category<NavLink to='/categories' className='float-end btn btn-sm btn-secondary'>View All Category <i className="fa-solid fa-arrow-right-long"></i></NavLink></h3>
        <div className="row mb-4">
          <div className="col-12 col-md-3 mb-5">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>

            </div>
          </div>
          {/*popular End*/}
          {/* Product Category*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>
            </div>
          </div>
          {/*Product End*/}
          {/* Product category*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>
            </div>
          </div>

          {/*Product End*/}


          {/* Product Category*/}
          <div className="col-12 col-md-3 mb-3">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>
            </div>
          </div>
        </div>
        {/*Product End*/}


        {/* Popular Product */}
        <h3 className='mb-4'>Popular Products<NavLink to='#' className='float-end btn btn-sm btn-secondary'>View All Popular Products <i className="fa-solid fa-arrow-right-long"></i></NavLink></h3>
        <div className="row mb-4">

          {/* Popular Products */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>

            </div>
          </div>
          {/*Product End*/}
          {/*Popular Product*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>
            </div>
          </div>
          {/*Product End*/}
          {/*Popular Products*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>
            </div>
          </div>
          {/*Product End*/}


          {/*Popular Products*/}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h4 className="card-title">Product title</h4>
              </div>
              <div className='card-footer'>
                Product Download: 100
              </div>

            </div>
          </div>
          {/*Product End*/}
        </div>

      </div>
    </main>

  )
}

export default Home;