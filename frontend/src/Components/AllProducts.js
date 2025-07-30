import React, { useEffect, useState } from 'react'

import SingleProduct from './SingleProduct'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function AllProducts(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    const [totalResult,setTotalResults]=useState(0);
    
    useEffect(() => {
      fetchData(baseUrl+'/products');
    },[]);

    async function fetchData(baseurl){
      fetch(baseurl)
      .then((response) => response.json())
      .then((data)=>{
        setProducts(data.results);
        setTotalResults(data.count);
      });
    }
    
    function changeUrl(baseurl){
      fetchData(baseurl);
    }

    var links=[];
    var limit = 12;
    var totalLinks=totalResult/limit;
    for(let i=1; i<=totalLinks; i++){
      links.push(<li className="page-item">
        <NavLink onClick={()=>changeUrl(baseUrl+`/products/?page=${i}`)} className="page-link"
        to={`/products/?page=${i}`}>{i}</NavLink></li>)
    }
   

  return (
    <>
    <section className='container mt-4'>
       {/* Category Product */}
       <h3 className='mb-4'>All Products</h3>
        <div className="row mb-4">
         {
            products.map((product)=> <SingleProduct product={product} />)
          }
        </div>
         {/* Product Area*/}
       
        {/*Pagination*/} 
        <nav aria-label="Page navigation example">
          <ul className="pagination">
           {links}
          </ul>
        </nav>
       </section>
       </>
  )
};

export default AllProducts;