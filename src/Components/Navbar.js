import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const location = useLocation();
  const isTestimonialActive = location.hash === '#testimo';
  const isPortfolioActive = location.hash === '#portfolio';

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid position-relative">
        {/* Logo always on the left */}
        <Link className="navbar-brand" to="/">
          <img src={process.env.PUBLIC_URL + '/Images/myLogo.svg'} alt="Logo" style={{ height: '40px' }} />
        </Link>

        {/* Toggle button always on the right (only visible on mobile) */}
        <button
          className="navbar-toggler d-lg-none ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center menu (desktop only) */}
        <div className="d-none d-lg-flex position-absolute start-50 translate-middle-x">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <Link
                className={`nav-link hover-effect ${location.pathname === '/aboutus' ? 'active' : ''}`}
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link hover-effect ${location.pathname === '/Service' ? 'active' : ''}`}
                to="/Service"
              >
                Services
              </Link>
            </li>
            <li className="nav-item mx-2">
              <HashLink
                smooth
                className={`nav-link hover-effect ${isTestimonialActive ? 'active' : ''}`}
                to="/#testimo"
              >
                Testimonial
              </HashLink>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link hover-effect ${location.pathname === '/blog' ? 'active' : ''}`}
                to="/Blog"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item mx-2">
            <HashLink
              smooth
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              to="/#portfolio"
              className={`nav-link hover-effect ${isPortfolioActive ? 'active' : ''}`}
            >
              Portfolio
            </HashLink>
            </li>
          </ul>
        </div>

        {/* Contact Us button on the right (desktop only) */}
        <div className="d-none d-lg-flex ms-auto">
          <Link className="btn btn-primary1" to="/Hire">
            Contact Us
          </Link>
        </div>

        {/* Offcanvas menu for mobile */}
        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <img src={process.env.PUBLIC_URL + '/Images/myLogo.svg'} alt="Logo" style={{ height: '40px' }} />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link
                  className={`nav-link hover-effect ${location.pathname === '/aboutus' ? 'active' : ''}`}
                  to="/aboutus"
                  data-bs-dismiss="offcanvas"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link hover-effect ${location.pathname === '/Service' ? 'active' : ''}`}
                  to="/Service"
                  data-bs-dismiss="offcanvas"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  className={`nav-link hover-effect ${isTestimonialActive ? 'active' : ''}`}
                  to="/#testimo"
                  data-bs-dismiss="offcanvas"
                >
                  Testimonial
                </HashLink>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link hover-effect ${location.pathname === '/blog' ? 'active' : ''}`}
                  to="/Blog"
                  data-bs-dismiss="offcanvas"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <div className="d-flex mt-3">
              <Link className="btn btn-primary1" to="/Hire" data-bs-dismiss="offcanvas">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
