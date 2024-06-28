import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
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
 
    <section id="services" className="services py-5 text-center">
      <div className="container">
        <div className="row">
        
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <span className="service-icon">
              <i className="fas fa-parachute-box"></i>
            </span>
            <h5 className="text-uppercase font-weight-bold">
              free shipping
            </h5>
            <p className="text-muted text-capitalize">
              free shipping on all order over 100.00
            </p>
          </div>
     
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <span className="service-icon">
              <i className="fas fa-phone-volume"></i>
            </span>
            <h5 className="text-uppercase font-weight-bold">
              ONLINE SUPPORT 24/7
            </h5>
            <p className="text-muted text-capitalize">
              We Will Assist You With Your Inquiries
            </p>
          </div>
        
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
            <span className="service-icon">
              <i className="fas fa-dollar-sign"></i>
            </span>
            <h5 className="text-uppercase font-weight-bold">
              MONEY BACK GURANTEE
            </h5>
            <p className="text-muted text-capitalize">
              Free 100% Refund For 30 Da
            </p>
          </div>
       
        </div>
      </div>
    </section>

    <section id="home-categories" className="home-categories py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 col-lg-3 align-self-center">
            <h5 className="text-uppercase">
              product categories
            </h5>
            <p className="text-muted text-capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque minus in error sunt laudantium totam nemo accusamus iure placeat.
            </p>
            <Link to="" className="categorie-link text-weight-bold text-capitalize">
              view all categories
            </Link>
            <div className="categorie-underline">
            </div>
          </div>
        
          <div className="col-10 mx-auto col-md-6 col-lg-9 my-3">
            <div className="row">
             
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img src="img/cagetogoryImg/bathroom-category.jpeg" className="img-fluid category-img" alt=""/>
                  <Link to="/products" className="category-link">
                    <h6 className="text-uppercase mb-0">
                      bathroom
                    </h6>
                    <p className="text-yellow mb-0">
                      50 items
                    </p>
                  </Link>
                </div>
              </div>
           
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img src="img/cagetogoryImg/kitchen-category.jpeg" className="img-fluid category-img" alt=""/>
                  <Link to="/products" className="category-link">
                    <h6 className="text-uppercase mb-0">
                      kitchen
                    </h6>
                    <p className="text-yellow mb-0">
                      20 items
                    </p>
                  </Link>
                </div>
              </div>
              
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img src="img/cagetogoryImg/livingroom-category.jpeg" className="img-fluid category-img" alt=""/>
                  <Link to="/products" className="category-link">
                    <h6 className="text-uppercase mb-0">
                      livingroom
                    </h6>
                    <p className="text-yellow mb-0">
                      25 items
                    </p>
                  </Link>
                </div>
              </div>
       
              <div className="col-md-6 col-lg-3 my-3">
                <div className="category-container">
                  <img src="img/cagetogoryImg/patio-category.jpeg" className="img-fluid category-img" alt=""/>
                  <Link to="/products" className="category-link">
                    <h6 className="text-uppercase mb-0">
                      patio
                    </h6>
                    <p className="text-yellow mb-0">
                      10 items
                    </p>
                  </Link>
                </div>
              </div>
             
            </div>
          </div>
         
        </div>
      </div>
    </section>

    <section id="home-filler">
      <div className="container-fluid">
        <div className="row home-filler align-items-center">
          <div className="col-10 mx-auto text-center text-white">
            <h4 className="text-uppercase font-weight-bold">
              smart furniture collection
            </h4>
            <p className="text-capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, accusantium
            </p>
            <Link to="#" className="text-capitalize collection-link text-yellow">
              view collection
            </Link>
            <div className="collection-underline"></div>
          </div>
        </div>
      </div>
    </section>
  
    <section id="featured" className="featured py-5">
      <div className="container">
        <div className="row my-3">
          <div className="col-10 mx-auto text-center">
            <h1 className="text-uppercase">
              featured products
            </h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, deleniti?
            </p>
          </div>
        </div>
        <div className="row">
          
          <div className="col-10 mx-auto col-md-6 col-lg-4">
            <div className="featured-container p-5">
              <img src="img/img-products/product-1.png" alt="" className="img-fluid"/>
              <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i className="fas fa-search"></i>
              </span>
              <Link to="#" className="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 className="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 className="text-center">
              <span className="text-muted old-price mx-2"> 200</span>
              <span> 100</span>
            </h6>
          </div>
    
          <div className="col-10 mx-auto col-md-6 col-lg-4">
            <div className="featured-container p-5">
              <img src="img/img-products/product-6.png" alt="" className="img-fluid"/>
              <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i className="fas fa-search"></i>
              </span>
              <Link to="#" className="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 className="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 className="text-center">
              <span className="text-muted old-price mx-2"> 200</span>
              <span> 100</span>
            </h6>
          </div>
   
          <div className="col-10 mx-auto col-md-6 col-lg-4">
            <div className="featured-container p-5">
              <img src="img/img-products/product-2.png" alt="" className="img-fluid"/>
              <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i className="fas fa-search"></i>
              </span>
              <Link to="#" className="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 className="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 className="text-center">
              <span className="text-muted old-price mx-2"> 200</span>
              <span> 100</span>
            </h6>
          </div>
        
          <div className="col-10 mx-auto col-md-6 col-lg-4">
            <div className="featured-container p-5">
              <img src="img/img-products/product-3.png" alt="" className="img-fluid"/>
              <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i className="fas fa-search"></i>
              </span>
              <Link to="#" className="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 className="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 className="text-center">
              <span className="text-muted old-price mx-2"> 200</span>
              <span> 100</span>
            </h6>
          </div>
        
          <div className="col-10 mx-auto col-md-6 col-lg-4">
            <div className="featured-container p-5">
              <img src="img/img-products/product-4.png" alt="" className="img-fluid"/>
              <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i className="fas fa-search"></i>
              </span>
              <Link to="#" className="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 className="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 className="text-center">
              <span className="text-muted old-price mx-2"> 200</span>
              <span> 100</span>
            </h6>
          </div>
      
          <div className="col-10 mx-auto col-md-6 col-lg-4">
            <div className="featured-container p-5">
              <img src="img/img-products/product-5.png" alt="" className="img-fluid"/>
              <span className="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i className="fas fa-search"></i>
              </span>
              <Link to="#" className="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 className="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 className="text-center">
              <span className="text-muted old-price mx-2"> 200</span>
              <span> 100</span>
            </h6>
          </div>
          
        </div>
      </div>
    </section>
    
    <section className="partners py-5">
      <div className="container">
        <div className="row">
        
          <div className="col-6 col-md-6 col-lg-4 mx-auto">
            <div
              id="partnerCarousel"
              className="carousel slide "
              data-ride="carousel"
            >
              <div className="carousel-inner">
            
                <div className="carousel-item active">
                  <img
                    src="img/company-logos/company-logo-1.png"
                    className="d-block w-100"
                    alt="partner company"
                  />
                </div>
              
                <div className="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-2.png"
                    className="d-block w-100"
                    alt="partner company"
                  />
                </div>
              
                <div className="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-3.png"
                    className="d-block w-100"
                    alt="partner company"
                  />
                </div>
        
                <div className="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-4.png"
                    className="d-block w-100"
                    alt="partner company"
                  />
                </div>
            
                <div className="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-5.png"
                    className="d-block w-100"
                    alt="partner company"
                  />
                </div>
            
                <div className="carousel-item">
                  <img
                    src="img/company-logos/company-logo-6.png"
                    className="d-block w-100"
                    alt="partner company"
                  />
                </div>             </div>
              <Link
                to="#partnerCarousel"
                className="carousel-control-prev"
                role="button"
                data-slide="prev"
              >
                <i className="fas fa-arrow-left"></i>
              </Link>
              <Link
                to="#partnerCarousel"
                className="carousel-control-next"
                role="button"
                data-slide="next"
              >
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section id="newsletter" className="newsletter py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h2 className="text-uppercase">
              newsletter
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis similique eum, aut culpa maiores cupiditate alias exercitationem error nesciunt.
            </p>
            <form action="">
              <div className="input-group mt-5 mb-4">
                <input type="text" className="text-capitalize form-control" placeholder="enter your email"/>
                <div className="input-group-append">
                <div className="input-group-text form-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                </div>
              </div>
              <button type="submit" className=" btn btn-yellow">subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  
    <section id="skills" className="skills py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
            <div className="skill-icon mr-3">
              <i className="fas fa-truck"></i>
            </div>
            <div className="skill-text">
              <h3 className="text-uppercase text-white">
                free shipping
              </h3>
              <p className="text-capitalize text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, obcaecati!
              </p>
            </div>
          </div>
          <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
            <div className="skill-icon mr-3">
              <i className="fas fa-comment-dollar"></i>
            </div>
            <div className="skill-text">
              <h3 className="text-uppercase text-white">
                price promise
              </h3>
              <p className="text-capitalize text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, obcaecati!
              </p>
            </div>
          </div>
          <div className="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
            <div className="skill-icon mr-3">
              <i className="fas fa-award"></i>
            </div>
            <div className="skill-text">
              <h3 className="text-uppercase text-white">
                lifetime warranty
              </h3>
              <p className="text-capitalize text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, obcaecati!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h1 className="text-uppercase font-weight-bold text-yellow d-inline-block footer-title">
              comfy sloth
            </h1>
          
            <div className="footer-icons d-flex justify-content-center my-5">
    
              <Link to="" className="footer-icon mx-2">
                <div className="fab fa-facebook"></div>
              </Link>
              
              <Link to="" className="footer-icon mx-2">
                <div className="fab fa-twitter"></div>
              </Link>
              
              
              <Link to="" className="footer-icon mx-2">
                <div className="fab fa-youtube"></div>
              </Link>
              
          
              <Link to="" className="footer-icon mx-2">
                <div className="fab fa-google-plus"></div>
              </Link>
              
              
              <Link to="" className="footer-icon mx-2">
                <div className="fab fa-instagram"></div>
              </Link>
       
            </div>
      
            <p className="text-muted text-capitalize w-75 mx-auto text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illum illo exercitationem ex porro consequuntur quae mollitia qui accusamus! Molestiae.
            </p>
            <div className="footer-contact d-flex justify-content-around mt-5">         
             <div className="text-capitalize">
                <span className="contact-icon mr-2">
                  <i className="fas fa-map"></i>
                </span>
                123 Main Street, Los Angeles
              </div>

              <div className="text-capitalize">
                <span className="contact-icon mr-2">
                  <i className="fas fa-phone"></i>
                </span>
                Phone : + (310) 111 2222
              </div>
            
              <div className="text-capitalize">
                <span className="contact-icon mr-2">
                  <i className="fas fa-envelope"></i>
                </span>
                Email : Eamil@Email.Com
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </footer>
 
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
};

export default Home;
