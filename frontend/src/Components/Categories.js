import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

function Categories() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  useEffect(() => {
    fetchData(`${baseUrl}/categories`);
  }, []);

  async function fetchData(baseurl) {
    try {
      const response = await fetch(baseurl);
      const result = await response.json();
      setCategories(result.data || []);
      setTotalResults(result.count || 0);
    } catch (error) {
      console.error('Error fetching data:', error);
      setCategories([]);
      setTotalResults(0);
    }
  }

  function changeUrl(baseurl) {
    fetchData(baseurl);
  }

  const links = [];
  const limit = 1; // Adjust limit if needed
  const totalLinks = Math.ceil(totalResult / limit);
  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item" key={i}>
        <NavLink
          onClick={() => changeUrl(`${baseUrl}/categories/?page=${i}`)}
          className="page-link"
          to={`/categories/?page=${i}`}
        >
          {i}
        </NavLink>
      </li>
    );
  }

  return (
    <>
      <section className='container mt-4'>
        {/* Popular categories */}
        <h3 className='mb-3'>
          All Categories
          <NavLink to='/categories' className='float-end btn btn-sm btn-secondary'>
            All Categories <i className="fa-solid fa-arrow-right-long"></i>
          </NavLink>
        </h3>
        <div className="row mb-2">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div className="col-12 col-md-3 mb-4" key={category.id}>
                <div className="card">
                  <img src={category.image || logo} className="card-img-top" alt={category} />
                  <div className="card-body">
                    <h4 className="card-title">
                      <NavLink to={`/categories/${category.title}/${category.id}`}>
                        {category.title}
                      </NavLink>
                    </h4>
                  </div>
                  <div className='card-footer'>
                    Product Download: 100
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {links}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Categories;
