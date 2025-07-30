import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';

function CategoryProduct(props) {
    const baseUrl = 'http://127.0.0.1:8000/api';
    const [products, setProducts] = useState([]);
    const [totalResult,setTotalResults]=useState(0);
    const {category_slug,category_id}=useParams();
    

    useEffect(() => {
      fetchData(baseUrl+'/products/?category='+category_id);
    },[]);


    function fetchData(baseurl){
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
    var limit = 1;
    var totalLinks=totalResult/limit;
    for(let i=1; i<=totalLinks; i++){
      links.push(<li className="page-item">
        <NavLink onClick={()=>changeUrl(baseUrl+`/products/?category=${category_id}&page=${i}`)} 
         to={`/category/${category_slug}/${category_id}/?page=${i}`}
        className="page-link">{i}</NavLink></li>)
    }
   

  return (
    <>
    <section className='container mt-4'>
       {/* Category Product */}
       <h3 className='mb-4'>All Products</h3>
        <div className="row mb-4">
         {
          products.map((product)=><SingleProduct product={product} />)
          }
        </div>
      
         {/* Product Area*/}
       
        {/*Pagination*/} 
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
           {links}
          </ul>
        </nav>
       </section>
       </>
  )
};

export default CategoryProduct;