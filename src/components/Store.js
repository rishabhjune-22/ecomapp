import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Store = () => {
    return (
<>

<header id="header" class="header">
      
      <nav class="navbar navbar-expand-lg navbar-light">
        <Link to="/" class="navbar-brand">
          <img src="img/logo.png" alt="company logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item mx-2 ">
              <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item mx-2">
              <Link to="/products" class="nav-link">Products</Link>
            </li>
            <li class="nav-item mx-2 ">
              <Link to="/singleproduct" class="nav-link">Single Product</Link>
            </li>
            <li class="nav-item mx-2 nav-active">
              <Link to="/store" class="nav-link">Store</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-icons d-none d-lg-flex">
          
          <div class="navbar-icon mx-2"><i class="fas fa-search"></i></div>
          
          
          <Link to="/store" class="navbar-icon mx-2 navbar-cart-icon">
            <i class="fas fa-shopping-cart"></i>
            <div class="cart-items">2</div>
          </Link>
          
        </div>
      </nav>
      
      <div class="banner-store d-flex pl-3 pl-lg-5 align-items-center text-center justify-content-center">
          <div>
            <h1 class="text-slanted text-capitalize display-4 text-yellow">
                comfy sloth
            </h1>
            <h1 class="text-capitalize display-4 font-weight-bold">
                our store
            </h1>
          </div>
      </div>
    </header>
    

    
    <section class="totals py-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col text-uppercase text-center">
            <div class="row">
              
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">
                products
              </p>
            </div>
            
            
            <div class="col-10 mx-auto col-md-4">
              <p class="text-uppercase">
                name of products 
              </p>
            </div>
            
            
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">
                price
              </p>
            </div>
            
            
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">
                quantity
              </p>
            </div>
            
            
            <div class="col-10 mx-auto col-md-2">
              <p class="text-uppercase">
                total
              </p>
            </div>
            
            </div>
            <hr/>
            
            <div class="row my-3 align-items-center">
              
              <div class="col-10 mx-auto col-md-2 my-3">
                <img src="img/img-products/product-1.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-10 mx-auto col-md-4">
                <p class="text-uppercase">
                  comfortable chair
                </p>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <p class="text-uppercase">
                  1000 rs
                </p>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <div class="d-flex justify-content-center align-items-center">
                <span class="btn btn-black mx-1">-</span>
                <span class="btn btn-black mx-1">4</span>
                <span class="btn btn-black mx-1">+</span>
                </div>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <p class="text-uppercase">
                  1000 rs
                </p>
              </div>
              
              
              <div class="col-10 mx-auto col-md-2 my-3">
                <img src="img/img-products/product-2.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-10 mx-auto col-md-4">
                <p class="text-uppercase">
                  comfortable chair
                </p>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <p class="text-uppercase">
                  1000 rs
                </p>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <div class="d-flex justify-content-center align-items-center">
                <span class="btn btn-black mx-1">-</span>
                <span class="btn btn-black mx-1">4</span>
                <span class="btn btn-black mx-1">+</span>
                </div>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <p class="text-uppercase">
                  1000 rs
                </p>
              </div>
              
              
              <div class="col-10 mx-auto col-md-2 my-3">
                <img src="img/img-products/product-3.png" alt="" class="img-fluid"/>
              </div>
              <div class="col-10 mx-auto col-md-4">
                <p class="text-uppercase">
                  comfortable chair
                </p>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <p class="text-uppercase">
                  1000 rs
                </p>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <div class="d-flex justify-content-center align-items-center">
                <span class="btn btn-black mx-1">-</span>
                <span class="btn btn-black mx-1">4</span>
                <span class="btn btn-black mx-1">+</span>
                </div>
              </div>
              <div class="col-10 mx-auto col-md-2">
                <p class="text-uppercase">
                  1000 rs
                </p>
              </div>
              
            </div>
            
            <div class="row my-3">
              <div class="col-sm-6 mx-auto col d-flex justify-content-center flex-wrap">
                <button type="button" class="btn btn-black my-2">Continue shipping</button>
                <button type="button" class="btn btn-yellow ml-2 my-2">checkout</button>
              </div>
            </div>
            
            <div class="row">
              <div class="col mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
                <div class="card card-body bg-secondary text-uppercase">
                  <div class="card-title text-white">
                    <h6>cart total</h6>
                  </div>
                  <div class="row">
                    
                    <div class="col-6">
                      SUB TOTOAL
                    </div>
                    <div class="col-6">
                      9000 rs
                    </div>
                    
                    
                    <div class="col-6">
                      TAX
                    </div>
                    <div class="col-6">
                      1230 rs
                    </div>
                    
                    
                    <div class="col-6">
                      SHIPPING
                    </div>
                    <div class="col-6">
                      900 rs
                    </div>
                    
                    
                    <div class="col-6 my-2">
                      ORDER TOTAL
                    </div>
                    <div class="col-6 text-danger my-2">
                      10000 rs
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
    

    
    <section id="featured" class="featured py-5">
      <div class="container">
        <div class="row my-3">
          <div class="col-10 mx-auto text-center">
            <h1 class="text-uppercase">
              featured products
            </h1>
            <p class="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, deleniti?
            </p>
          </div>
        </div>
        <div class="row">
          
          <div class="col-10 mx-auto col-md-6 col-lg-4">
            <div class="featured-container p-5">
              <img src="img/img-products/product-1.png" alt="" class="img-fluid"/>
              <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i class="fas fa-search"></i>
              </span>
              <Link to="#" class="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 class="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 class="text-center">
              <span class="text-muted old-price mx-2">2000 rs</span>
              <span>100 rs</span>
            </h6>
          </div>
          
          
          <div class="col-10 mx-auto col-md-6 col-lg-4">
            <div class="featured-container p-5">
              <img src="img/img-products/product-6.png" alt="" class="img-fluid"/>
              <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i class="fas fa-search"></i>
              </span>
              <Link to="#" class="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 class="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 class="text-center">
              <span class="text-muted old-price mx-2">2000 rs</span>
              <span>1000 rs</span>
            </h6>
          </div>
          
          
          <div class="col-10 mx-auto col-md-6 col-lg-4">
            <div class="featured-container p-5">
              <img src="img/img-products/product-2.png" alt="" class="img-fluid"/>
              <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i class="fas fa-search"></i>
              </span>
              <Link to="#" class="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 class="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 class="text-center">
              <span class="text-muted old-price mx-2">2000 rs</span>
              <span>1000 rs</span>
            </h6>
          </div>
          
          
          <div class="col-10 mx-auto col-md-6 col-lg-4">
            <div class="featured-container p-5">
              <img src="img/img-products/product-3.png" alt="" class="img-fluid"/>
              <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i class="fas fa-search"></i>
              </span>
              <Link to="#" class="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 class="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 class="text-center">
              <span class="text-muted old-price mx-2">2000 rs</span>
              <span>1000 rs</span>
            </h6>
          </div>
          
          
          <div class="col-10 mx-auto col-md-6 col-lg-4">
            <div class="featured-container p-5">
              <img src="img/img-products/product-4.png" alt="" class="img-fluid"/>
              <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i class="fas fa-search"></i>
              </span>
              <Link to="#" class="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 class="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 class="text-center">
              <span class="text-muted old-price mx-2">2000 rs</span>
              <span>1000 rs</span>
            </h6>
          </div>
          
          
          <div class="col-10 mx-auto col-md-6 col-lg-4">
            <div class="featured-container p-5">
              <img src="img/img-products/product-5.png" alt="" class="img-fluid"/>
              <span class="featured-search-icon" data-toggle="modal" data-target="#productModal">
                <i class="fas fa-search"></i>
              </span>
              <Link to="#" class="featured-store-link text-capitalize">add to cart</Link>
            </div>
            <h6 class="text-capitalize text-center my-2">
              special product
            </h6>
            <h6 class="text-center">
              <span class="text-muted old-price mx-2">2000 rs</span>
              <span>1000 rs</span>
            </h6>
          </div>
          
        </div>
      </div>
    </section>
    

    
    <section class="partners py-5">
      <div class="container">
        <div class="row">
          
          <div class="col-6 col-md-6 col-lg-4 mx-auto">
            <div
              id="partnerCarousel"
              class="carousel slide "
              data-ride="carousel"
            >
              <div class="carousel-inner">
                
                <div class="carousel-item active">
                  <img
                    src="img/company-logos/company-logo-1.png"
                    class="d-block w-100"
                    alt="partner company"
                  />
                </div>
                
                
                <div class="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-2.png"
                    class="d-block w-100"
                    alt="partner company"
                  />
                </div>
                
                
                <div class="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-3.png"
                    class="d-block w-100"
                    alt="partner company"
                  />
                </div>
                
                
                <div class="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-4.png"
                    class="d-block w-100"
                    alt="partner company"
                  />
                </div>
                
                
                <div class="carousel-item ">
                  <img
                    src="img/company-logos/company-logo-5.png"
                    class="d-block w-100"
                    alt="partner company"
                  />
                </div>
                
                
                <div class="carousel-item">
                  <img
                    src="img/company-logos/company-logo-6.png"
                    class="d-block w-100"
                    alt="partner company"
                  />
                </div>
                
              </div>
              <Link
                to="#partnerCarousel"
                class="carousel-control-prev"
                role="button"
                data-slide="prev"
              >
                <i class="fas fa-arrow-left"></i>
              </Link>
              <Link
                to="#partnerCarousel"
                class="carousel-control-next"
                role="button"
                data-slide="next"
              >
                <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section id="newsletter" class="newsletter py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto text-center">
            <h2 class="text-uppercase">
              newsletter
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis similique eum, aut culpa maiores cupiditate alias exercitationem error nesciunt.
            </p>
            <form action="">
              <div class="input-group mt-5 mb-4">
                <input type="text" class="text-capitalize form-control" placeholder="enter your email"/>
                <div class="input-group-append">
                <div class="input-group-text form-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                </div>
              </div>
              <button type="submit" class=" btn btn-yellow">subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    

    
    <section id="skills" class="skills py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
            <div class="skill-icon mr-3">
              <i class="fas fa-truck"></i>
            </div>
            <div class="skill-text">
              <h3 class="text-uppercase text-white">
                free shipping
              </h3>
              <p class="text-capitalize text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, obcaecati!
              </p>
            </div>
          </div>
          <div class="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
            <div class="skill-icon mr-3">
              <i class="fas fa-comment-dollar"></i>
            </div>
            <div class="skill-text">
              <h3 class="text-uppercase text-white">
                price promise
              </h3>
              <p class="text-capitalize text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, obcaecati!
              </p>
            </div>
          </div>
          <div class="col-10 col-md-6 col-lg-4 mx-auto d-flex my-3">
            <div class="skill-icon mr-3">
              <i class="fas fa-award"></i>
            </div>
            <div class="skill-text">
              <h3 class="text-uppercase text-white">
                lifetime warranty
              </h3>
              <p class="text-capitalize text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, obcaecati!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <footer class="footer py-5">
      <div class="container">
        <div class="row">
          <div class="col-10 mx-auto text-center">
            <h1 class="text-uppercase font-weight-bold text-yellow d-inline-block footer-title">
              comfy sloth
            </h1>
            
            <div class="footer-icons d-flex justify-content-center my-5">
              
              <Link to="" class="footer-icon mx-2">
                <div class="fab fa-facebook"></div>
              </Link>
              
              
              <Link to="" class="footer-icon mx-2">
                <div class="fab fa-twitter"></div>
              </Link>
              
              
              <Link to="" class="footer-icon mx-2">
                <div class="fab fa-youtube"></div>
              </Link>
              
              
              <Link to="" class="footer-icon mx-2">
                <div class="fab fa-google-plus"></div>
              </Link>
              
              
              <Link to="" class="footer-icon mx-2">
                <div class="fab fa-instagram"></div>
              </Link>
              
            </div>
            
            <p class="text-muted text-capitalize w-75 mx-auto text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illum illo exercitationem ex porro consequuntur quae mollitia qui accusamus! Molestiae.
            </p>
            <div class="footer-contact d-flex justify-content-around mt-5">
              
              <div class="text-capitalize">
                <span class="contact-icon mr-2">
                  <i class="fas fa-map"></i>
                </span>
                123 Main Street, Los Angeles
              </div>
              
              
              <div class="text-capitalize">
                <span class="contact-icon mr-2">
                  <i class="fas fa-phone"></i>
                </span>
                Phone : + (310) 111 2222
              </div>
              
              
              <div class="text-capitalize">
                <span class="contact-icon mr-2">
                  <i class="fas fa-envelope"></i>
                </span>
                Email : Eamil@Email.Com
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          
          <div class="modal-header">
            <h5 class="modal-title text-capitalize">product info</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          
          
          <div class="modal-body">
            <div class="row">
              <div class="col text-center">
                <img src="img/img-products/product-1.png" class="img-fluid" alt="" />
                
                <div class="ratings">
                  <span class="rating-icon"><i class="fas fa-star"></i></span>
                  <span class="rating-icon"><i class="fas fa-star"></i></span>
                  <span class="rating-icon"><i class="fas fa-star"></i></span>
                  <span class="rating-icon"><i class="fas fa-star"></i></span>
                  <span class="rating-icon"><i class="far fa-star"></i></span>
                  <span class="text-capitalize">(25 customer reviews)</span>
                </div>
                
                <h2 class="text-uppercase my-2">premium office armchair</h2>
                <h2>100.00 rs - 2000.00 rs</h2>
                <p class="lead text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
                  porro.
                </p>
                
                <h5 class="text-uppercase">
                  colors :
                  <span class="d-inline-block products-color products-color-black mr-2"></span>
                  <span class="d-inline-block products-color products-color-red mr-2"></span>
                  <span class="d-inline-block products-color products-color-blue mr-2"></span>
                </h5>
                
                
                <h5 class="text-uppercase">
                  sizes : <span class="mx-2">xs</span> <span class="mx-2">s</span>
                  <span class="mx-2">m</span> <span class="mx-2">l</span>
                  <span class="mx-2">xl</span>
                </h5>
                <div class="d-flex flex-wrap">
                  
                  <div class="d-flex my-2">
                    <span class="btn btn-black mx-1">-</span>
                    <span class="btn btn-black mx-1">4</span>
                    <span class="btn btn-black mx-1">+</span>
                  </div>
                  <button class="btn btn-black my-2 mx-2">wishlist</button>
                  <button class="btn btn-yellow my-2 mx-2">add to cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">close</button>
          </div>
        </div>
      </div>
    </div>

</>

      );
}
 
export default Store;
