import React, { useContext, useEffect, useState } from 'react';
import logo from '../logo.svg';
import { NavLink, useParams } from 'react-router-dom';
import SingleRelatedProducts from './SingleRelatedProducts';
import { CartContext, UserContext} from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';


function ProductDetail() {
  const baseUrl = 'http://127.0.0.1:8000/api';
  const [productData, setProductData] = useState([]);
  console.log('productdata--',productData)
  const [productImgs, setProductImgs] = useState([]);
  const [productTags, setProductTags] = useState([]);
  const [relatedProducts, setRelatedproducts] = useState([])
  console.log('relatedProducts--',relatedProducts);
  const {product_slug, product_id} = useParams();
  const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
  const {cartData,setCartData}=useContext(CartContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetchData(baseUrl+'/product/'+product_id);
    fetchRelatedData(baseUrl+'/related-products/'+product_id);
    checkProductInCart(product_id);  
    
  },[]);

  /*if(userContext.login==null){
    window.location.href="/customer/login"
  }else{
    if(ConfirmOrder==false){
      addOrderInTable();
    }
  }*/

  function checkProductInCart(product_id){
    var previousCart=localStorage.getItem('cartData');
    var cartJson=JSON.parse(previousCart);
    if(cartJson!=null){
      cartJson.map((cart)=>{
        if(cart!=null && cart.product.id == product_id){
          setcartButtonClickStatus(true);
        }
      });
    }
  }

  function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data)=>{
        setProductData(data);
        setProductImgs(data.product_imgs);  
        setProductTags(data.tag_list);
    });
  }

  function fetchRelatedData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data)=>{
      setRelatedproducts(data.results); 
    });
  }
  
  const tagsLinks=[]
  for(let i=0; i<productTags.length; i++){
    let tag=productTags[i].trim();
    tagsLinks.push(<NavLink className='badge bg-secondary text-white me-1'  
      to={`/products/${tag}`}>{tag}</NavLink>)
  }
  
  const cartAddButtonHandler = () => {
    var previousCart=localStorage.getItem('cartData');
    var cartJson = JSON.parse(previousCart);
    var cartData={
        'product':{
          'id':productData.id,
          'title':productData.title,
          'price':productData.price,
          'image':productData.image,
        },
        'user':{
          'id':1
        },
        
    }
    if(cartJson!=null){
      cartJson.push(cartData);
      var cartString=JSON.stringify(cartJson);
      localStorage.setItem('cartData',cartString);
      setCartData(cartJson);
    }else{
      var newCartList=[];
      newCartList.push(cartData);
      var cartString=JSON.stringify(newCartList);
      localStorage.setItem('cartData',cartString);
    }
    setcartButtonClickStatus(true);
  }

  const cartRemoveButtonHandler = () => {
    var previousCart=localStorage.getItem('cartData');
    var cartJson=JSON.parse(previousCart);
    cartJson.map((cart,index)=>{
        if(cart!=null && cart.product.id == productData.id){
          //delete cartJson[index];
          cartJson.splice(index, 1);        
      }
    });
    var cartString=JSON.stringify(cartJson);
    localStorage.setItem('cartData',cartString);
    setcartButtonClickStatus(false);
    setCartData(cartJson);
  }

  //saveInWishList 
  function saveInWishList(){
    const customerId = localStorage.getItem('customer_id');
    const formData=new FormData();
    formData.append('customer',customerId);
    formData.append('product',productData.id);
    console.log(formData);
    //submit data
    axios.post(baseUrl+'/wishlist/',formData)
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4"> 
        <div id="productThumbnailSlider" className="carousel carousel-dark slide" 
        data-bs-ride="true">
        <div className="carousel-indicators">
          {productImgs.map((img,index)=>{
              if(index == 0){
                return <button key={index} type="button" data-bs-target="#productThumbnailSlider"
                 data-bs-slide-to={index} className="active" aria-current="true" 
                aria-label="Slide 1"></button>
            }else{
              return <button key={index} type="button" data-bs-target="#productThumbnailSlider" 
              data-bs-slide-to={index} className="active" aria-current="true" 
              aria-label="Slide 1"></button>
            }
          })}
          
        </div>
        <div className="carousel-inner">
          {productImgs.map((img,index)=>{
              if(index == 0){
                return <div className='carousel-item active'>
                  <img key={index} src={img.image} className='img-thumbnail mb-5' alt={index} />
                </div>
            }else{
              return  <div className='carousel-item active'>
              <img key={index} src={img.image} className='img-thumbnail mb-5' alt={index} />
            </div>
            }
          })}
      </div>
      </div>
        </div>
        <div className="col-7">
          <h3>{productData.title}</h3>
          <p>{productData.detail}</p>
          <h5 className='card-title'>Price: Rs. {productData.price}</h5>
          <p className='mt-3'>
          <a title="Demo" href={productData.demo_url} target="blank" className='btn btn-dark btn-sm'>
            <i className="fa-solid fa-video"></i> Demo</a>
          
          {!cartButtonClickStatus &&
          <button title="Add to Cart" type="button" onClick={cartAddButtonHandler} 
            className='btn btn-primary btn-sm ms-2'>
            <i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
          }
          {cartButtonClickStatus &&
          <button title="Remove from Cart" type="button" onClick={cartRemoveButtonHandler}
            className='btn btn-warning btn-sm ms-2'>
            <i className="fa-solid fa-cart-plus"></i> Remove from Cart</button>
          }

          <button title="buy Now" className='btn btn-success btn-sm ms-2'>
            <i className="fa-solid fa-bag-shopping"></i> Buy Now</button>
         
          {
            userContext.login && <button onClick={saveInWishList} title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'>
            <i className="fa fa-heart"></i> Wishlist</button>
          }

          {
            userContext.login == null && <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2 disabled'>
            <i className="fa fa-heart"></i> Wishlist</button>
          }
  
           
          </p>
          <hr />
          <div className='producttags'>
            <h5 className='mt-3'>Tags</h5>
            <p>
              {tagsLinks}
            </p>
          </div>
        </div>
     </div>

     {/*Related Products */}
     {relatedProducts.length > 0 &&
     <>
     <h3 className='mt-5 mb-3 text-center'>Related Products</h3>
     <div id='relatedProductsSlider' className='carousel carousel-dark slide' data-bs-ride="true">
      <div className='carousel-indicators'>
          {relatedProducts.map((product,index)=>{
              if(index == 0){
                return  <button type="button" data-bs-target="#relatedProductsSlider"
                 data-bs-slide-to={index} className="active" aria-current="true" 
                aria-label="Slide 1"></button>
            }else{
              return <button type="button" data-bs-target="#relatedProductsSlider" 
              data-bs-slide-to={index} aria-current="true" 
              aria-label="Slide 1"></button>
            }
          })}
       
      </div>
        <div className='carousel-inner'>
        {relatedProducts.map((product,index)=>{
              if(index == 0){
                return <div className='carousel-item active'>
                <SingleRelatedProducts product={product}/> 
                </div>
            }else{
              return 
              <div className='carousel-item active'>
              <SingleRelatedProducts product={product}/> 
            </div>
            }
          })}
         
          
        </div>
     </div>
     </>
     }
    </section>
  )
}

export default ProductDetail;