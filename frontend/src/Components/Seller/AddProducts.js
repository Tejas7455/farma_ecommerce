import React from 'react'
import SellerSidebar from './SellerSidebar';

function AddProducts() {
  return (

  <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-2 col-12 mb-5'>
          <SellerSidebar />   
        </div>
        <div className='col-md-10 col-12 mb-5'>
          <div className='row'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-10 ms-5'>
                  <div className="card">
                    <h4 className='card-header'>Add Products</h4>
                  <div>
                    <form className='container mt-4 mb-4'>
                      <div className="mb-3">
                      <label for="category" className="form-label">Category</label>
                      <select className='form-control'>
                        <option>Seeds</option>
                        <option>Pesticides</option>
                        <option>Fertilizers</option>
                      </select>
                     
                      </div>
                      <div className="mb-3">
                      <label for="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="title" />
                      </div>
                      <div className="mb-3">
                      <label for="price" className="form-label">Price</label>
                      <input type="number" className="form-control" id="price" />
                      </div>
                      <div className="mb-3">
                      <label for="descriptions" className="form-label">Description</label>
                      <textarea type="text" className="form-control" rows="8" id="descriptions" />
                      </div>
                    
                      <div className="mb-3">
                      <label for="productimg" className="form-label">Product Image</label>
                      <input type="file" className="form-control" id="productimg"/>
                      </div>

                      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </form>
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  </div>
  )
}



export default AddProducts;