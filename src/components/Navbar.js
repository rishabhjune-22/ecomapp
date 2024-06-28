import { Outlet, Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
    return (  
<>
<header id="header" className="header">
   
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <img src="img/logo.png" alt="company logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2 nav-active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/singleproduct" className="nav-link">Single Product</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/store" className="nav-link">Store</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icons d-none d-lg-flex">
          
          <div className="navbar-icon mx-2"><i className="fas fa-search"></i></div>
          
          <Link to="/store" className="navbar-icon mx-2 navbar-cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <div className="cart-items">2</div>
          </Link>
      
        </div>
      </nav>
     
      <div className="banner d-flex align-items-center pl-3 pl-lg-5">
        <div>
          <h1 className="text-slanted text-capitalize mb-0">
            Minimalist
          </h1>
          <h1 className="text-lowercase font-weight-bold">
            interior style
          </h1>
          <Link to="#" className="btn btn-info"> view collection </Link>
        </div>
      </div>
    </header>

    <div className="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          
          <div className="modal-header">
            <h5 className="modal-title text-capitalize">product info</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
         
          <div className="modal-body">
            <div className="row">
              <div className="col text-center">
                <img src="img/img-products/product-1.png" className="img-fluid" alt="" />
             
                <div className="ratings">
                  <span className="rating-icon"><i className="fas fa-star"></i></span>
                  <span className="rating-icon"><i className="fas fa-star"></i></span>
                  <span className="rating-icon"><i className="fas fa-star"></i></span>
                  <span className="rating-icon"><i className="fas fa-star"></i></span>
                  <span className="rating-icon"><i className="far fa-star"></i></span>
                  <span className="text-capitalize">(25 customer reviews)</span>
                </div>
       
                <h2 className="text-uppercase my-2">premium office armchair</h2>
                <h2> 10.00 -  200.00</h2>
                <p className="lead text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                  porro.
                </p>
 
                <h5 className="text-uppercase">
                  colors :
                  <span className="d-inline-block products-color products-color-black mr-2"></span>
                  <span className="d-inline-block products-color products-color-red mr-2"></span>
                  <span className="d-inline-block products-color products-color-blue mr-2"></span>
                </h5>
    
                <h5 className="text-uppercase">
                  sizes : <span className="mx-2">xs</span> <span className="mx-2">s</span>
                  <span className="mx-2">m</span> <span className="mx-2">l</span>
                  <span className="mx-2">xl</span>
                </h5>
                <div className="d-flex flex-wrap">
               
                  <div className="d-flex my-2">
                    <span className="btn btn-black mx-1">-</span>
                    <span className="btn btn-black mx-1">4</span>
                    <span className="btn btn-black mx-1">+</span>
                  </div>
                  <button className="btn btn-black my-2 mx-2">wishlist</button>
                  <button className="btn btn-yellow my-2 mx-2">add to cart</button>
                </div>
              </div>
            </div>
          </div>
        
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">close</button>
          </div>
        </div>
      </div>
    </div>



</>

    );
}
 
export default Navbar;
