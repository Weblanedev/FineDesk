import CartToggler from "components/shared/navbar/CartToggler";
import { Link } from "react-router-dom";

interface NavProps {
  onCartTogglerClick: () => void;
  onNavbarTogglerClick: () => void;
}

function Nav({ onCartTogglerClick, onNavbarTogglerClick }: NavProps) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <button
          className="navbar-toggler"
          onClick={onNavbarTogglerClick}
          aria-label="toggle-navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="nav-link d-md-none d-md-inline-block lh-1" style={{ fontSize: '20px' }} aria-current="page" to="/">
          FINEDESK
        </Link>
      </div>
      <div className="d-xxl-none">
        <CartToggler onCartTogglerClick={onCartTogglerClick} />
      </div>
      <div className="collapse navbar-collapse position-relative justify-content-between d-none d-xxl-flex">
        <Link className="nav-link lh-1" style={{ fontSize: '20px' }} aria-current="page" to="/">
          FINEDESK
        </Link>
        <ul className="navbar-nav mb-2 mb-xxl-0 position-absolute translate-middle start-50 top-50">
          {/* <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/headphones"
              data-cy="headphones-nav-link"
            >
              Headphones
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/speakers"
              data-cy="speakers-nav-link"
            >
              Speakers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/earphones"
              data-cy="earphones-nav-link"
            >
              Earphones
            </Link>
          </li>
        </ul>
        <CartToggler onCartTogglerClick={onCartTogglerClick} />
      </div>
    </>
  );
}

export default Nav;
