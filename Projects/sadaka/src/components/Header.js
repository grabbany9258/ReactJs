import { Link } from "react-router-dom";
import React from 'react'

export default function Header() {
    return (
        <div>

            <header className="main-header">


                <nav className="navbar navbar-static-top">

                    <div className="navbar-top">

                        <div className="container">
                            <div className="row">

                                <div className="col-sm-6 col-xs-12">

                                    <ul className="list-unstyled list-inline header-contact">
                                        <li> <i className="fa fa-phone"></i> <a href="tel:">+212 658 986 213 </a> </li>
                                        <li> <i className="fa fa-envelope"></i> <a href="mailto:contact@sadaka.org">contact@sadaka.org</a> </li>
                                    </ul>

                                </div>

                                <div className="col-sm-6 col-xs-12 text-right">

                                    <ul className="list-unstyled list-inline header-social">

                                        <li> <a href="#"> <i className="fa fa-facebook"></i> </a> </li>
                                        <li> <a href="#"> <i className="fa fa-twitter"></i>  </a> </li>
                                        <li> <a href="#"> <i className="fa fa-google"></i>  </a> </li>
                                        <li> <a href="#"> <i className="fa fa-youtube"></i>  </a> </li>
                                        <li> <a href="#"> <i className="fa fa fa-pinterest-p"></i>  </a> </li>
                                    </ul>
                                    {/* <!-- /.header-social  --> */}

                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="navbar-main">

                        <div className="container">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">

                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>

                                </button>

                                <a className="navbar-brand" href="index.html"><img src="assets/images/sadaka-logo.png" alt="" /></a>

                            </div>

                            <div id="navbar" className="navbar-collapse collapse pull-right">

                                <ul className="nav navbar-nav">

                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active">
                                            HOME
                                        </Link>
                                    </li>



                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link">
                                            About us
                                        </Link>
                                    </li>


                                    <li className="has-child">
                                        <a href="#">CAUSES</a>

                                        <ul className="submenu">
                                            <li className="submenu-item">
                                                <Link to="/cause" className="nav-link">
                                                    Cause List
                                                </Link></li>
                                            <li className="submenu-item">
                                                <Link to="/singlecause" className="nav-link">
                                                    Single Cause
                                                </Link></li>

                                        </ul>

                                    </li>

                                    <li className="nav-item">
                                        <Link to="/gallery" className="nav-link">
                                            Gallery
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/users" className="nav-link">
                                            User List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/allproduct" className="nav-link">
                                            All Products
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">
                                            Contact
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                            {/* <!-- /#navbar --> */}

                        </div>
                        {/* <!-- /.container --> */}

                    </div>
                    {/* <!-- /.navbar-main --> */}


                </nav>

            </header>
            {/* <!-- /. main-header --> */}

        </div>
    )
}
