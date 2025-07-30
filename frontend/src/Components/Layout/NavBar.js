import React from 'react'
function NavBar() {
  return (
    <>
  
    {/*Rating and Review*/}
        <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5 conatiner" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
          </div>
          <div className="carousel-item">
          <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                <i className='fa fa-star text-warning'></i>
                <i className='fa fa-star text-warning'></i>
                <i className='fa fa-star text-warning'></i>
                <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
          </div>
          <div className="carousel-item">
          <figure className="text-center">
                <blockquote className="blockquote">
                  <p>contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                <i className='fa fa-star text-warning'></i>
                <i className='fa fa-star text-warning'></i>
                <i className='fa fa-star text-warning'></i>
                <i className='fa fa-star text-warning'></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    {/* End Review and Rating*/}
    
    
    
    
</>
  );
};

export default NavBar