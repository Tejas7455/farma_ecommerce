import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Categories() {
  const baseUrl = 'http://127.0.0.1:8000/api';

  const [categories, setCategories] = useState([]);
  const [totalResult, setTotalResults] = useState(0);

  const pageSize = 4; // MUST match backend pagination

  useEffect(() => {
    fetchData(`${baseUrl}/categories/`);
  }, []);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();

      setCategories(result.data || []);
      setTotalResults(result.count || 0);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategories([]);
      setTotalResults(0);
    }
  }

  function changeUrl(url) {
    fetchData(url);
  }

  /* ================= Pagination ================= */
  const totalPages = Math.ceil(totalResult / pageSize);
  const links = [];

  for (let i = 1; i <= totalPages; i++) {
    links.push(
      <li className="page-item" key={i}>
        <button
          className="page-link"
          onClick={() => changeUrl(`${baseUrl}/categories/?page=${i}`)}
        >
          {i}
        </button>
      </li>
    );
  }

  return (
    <section className="container mt-4">

      {/* Heading */}
      <h3 className="mb-4 d-flex justify-content-between align-items-center">
        <span style={{ color: '#0d47a1' }}>All Categories</span>
        
      </h3>

      {/* Categories */}
      <div className="row">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div className="col-12 col-sm-6 col-md-3 mb-4" key={category.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ backgroundColor: '#e3f2fd' }}   // medium-light blue
              >
                <img
                  src={category.image || logo}
                  className="card-img-top"
                  alt={category.title}
                  style={{
                    height: '180px',
                    objectFit: 'contain',
                    padding: '10px'
                  }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-semibold">
                    <NavLink
                      to={`/categories/${category.title}/${category.id}`}
                      style={{ textDecoration: 'none', color: '#0d47a1' }}
                    >
                      {category.title}
                    </NavLink>
                  </h5>
                </div>

                <div
                  className="card-footer text-center"
                  style={{ backgroundColor: '#bbdefb' }}
                >
                  Products Available
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">No categories available</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination pagination-sm">
            {links}
          </ul>
        </nav>
      )}

    </section>
  );
}

export default Categories;
