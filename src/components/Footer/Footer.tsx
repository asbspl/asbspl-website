import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerLogo from "../../assets/footer-logo.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer" aria-label="Website footer">
            <div className="container">
                <div className="row gy-5 justify-content-evenly">
                    {/* Company */}
                    <section className="col-lg-4 col-md-6" aria-labelledby="footer-company">
                        <Link
                            to="/"
                            className="footer-logo"
                            aria-label="A S Building Solutions Pvt Ltd - Home"
                        >
                            <img
                                src={footerLogo}
                                alt="A S Building Solutions Pvt Ltd"
                                className="logo-text"
                            />
                        </Link>

                        <p className="footer-text footer-description">
                            A S Building Solutions Pvt Ltd, an
                            ISO 9001:2015 certified company, was
                            incorporated in 2000 in Pune as Chauhan Enterprises.
                            The company focuses on making building and construction practices
                            more efficient through innovative dry-mix building products.
                        </p>
                    </section>

                    {/* Company Links */}
                    <nav
                        className="col-lg-2 col-md-6 col-sm-6"
                        aria-labelledby="footer-company"
                    >
                        <h2 id="footer-company" className="footer-title">
                            Company
                        </h2>

                        <ul className="footer-links footer-text">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/Careers">Careers</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>

                    {/* Products */}
                    <nav
                        className="col-lg-2 col-md-6 col-sm-6"
                        aria-labelledby="footer-products"
                    >
                        <h2 id="footer-products" className="footer-title">
                            Products
                        </h2>

                        <ul className="footer-links footer-text">
                            <li>
                                <Link to="/products/HackingAgent">Paints &amp; Primers</Link>
                            </li>
                            <li>
                                <Link to="/products/BJM">Dry Mix Products</Link>
                            </li>
                            <li>
                                <Link to="/products/PREMIXPlaster">
                                    Plaster, Putty &amp; Crack Filler
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact */}
                    <section
                        className="col-lg-3 col-md-6"
                        aria-labelledby="footer-contact"
                    >
                        <h2 id="footer-contact" className="footer-title">
                            Office Address
                        </h2>

                        <address className="footer-contact footer-text">
                            <div className="contact-item">

                                <p>
                                    Vishva Vimal Complex, Opp. Hyundai Khotari Showroom,
                                    Tukaram Nagar, Magarpatta - Kharadi, Kharadi, Pune,
                                    Maharashtra 411014
                                </p>
                            </div>

                            <div className="contact-item">

                                <a className="footer-contact" href="tel:+918526872687" aria-label="Call A S Building Solutions">
                                    Phone:- +91-852-687-2687
                                </a>
                            </div>

                            <div className="contact-item footer-mail">

                                <a href="mailto:contact@asbspl.com">
                                    Email:- contact@asbspl.com
                                </a>
                            </div>

                        </address>
                        <div className="social-links" aria-label="Social media links ">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebook aria-hidden="true" />
                            </a>


                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter aria-hidden="true" />
                            </a>


                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin aria-hidden="true" />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram aria-hidden="true" />
                            </a>
                        </div>
                    </section>

                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <div className="row align-items-center gy-3">
                        <div>
                            <p className="footer-text copyright">
                                © {year} A S Building Solutions Pvt Ltd.{" "}
                                All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
