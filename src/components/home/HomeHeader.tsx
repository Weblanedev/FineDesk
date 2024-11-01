import { Link } from "react-router-dom";
import usePrefetchProductBySlugOnInView from "hooks/usePrefetchProductBySlugOnInView";

function Header() {
  const ref = usePrefetchProductBySlugOnInView("xx99-mark-two-headphones");

  return (
    <div className="container h-100" ref={ref}>
      <div className="row text-center text-xxl-start h-100 align-items-center">
        <div className="col-md-8 offset-md-2 col-xxl-7 offset-xxl-0">
          <small className="mt-6 mb-3 text-white-50 text-uppercase ls-5 d-block">
            New Product
          </small>
          <Link
            className="text-decoration-none"
            to="/products/xx99-mark-two-headphones"
          >
            <h2 className="mb-4 text-white d-md-none fw-bold h1">
              XX99 Mark II Headphones
            </h2>
            <h2 className="display-4 mb-4 text-white d-none d-md-block fw-bold h1">
              XX99 Mark II Headphones
            </h2>
          </Link>
          <p className="lh-lg mb-4 pb-1 pb-md-3 text-white-75 mx-3 ps-xxl-0 ms-xxl-0 me-xxl-6 pe-xxl-6">
          Designed for audiophiles and professionals alike, Fine Desk ProSound Headphones deliver immersive
           sound with deep bass and crystal-clear highs. Featuring noise-cancellation technology and comfortable, 
           memory foam ear cushions, they{"'"}re perfect for long listening sessions.
          </p>
          <Link
            className="btn btn-primary"
            to="/products/xx99-mark-two-headphones"
            data-cy="xx99-mark-two-headphones-link"
          >
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
