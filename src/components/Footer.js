const Footer = () => {
    return (
<>
<footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <h1 className="text-uppercase font-weight-bold text-yellow d-inline-block footer-title">
              comfy sloth
            </h1>
          
            <div className="footer-icons d-flex justify-content-center my-5">
    
              <a href="" className="footer-icon mx-2">
                <div className="fab fa-facebook"></div>
              </a>
              
              <a href="" className="footer-icon mx-2">
                <div className="fab fa-twitter"></div>
              </a>
              
              
              <a href="" className="footer-icon mx-2">
                <div className="fab fa-youtube"></div>
              </a>
              
          
              <a href="" className="footer-icon mx-2">
                <div className="fab fa-google-plus"></div>
              </a>
              
              
              <a href="" className="footer-icon mx-2">
                <div className="fab fa-instagram"></div>
              </a>
       
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
                Email : Email@Email.Com
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
                <p className="lead text-muted ">
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
 
export default Footer;