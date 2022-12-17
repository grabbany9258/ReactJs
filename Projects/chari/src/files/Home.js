import React from "react";

export default function Home() {
  return (
    <div>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="assets/img/carousel-1.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Work is important but food is more important
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        We used to work for leading healthy life & for making
                        life healthy food is 1st priority!.
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="a"
                      >
                        Learn More
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="assets/img/carousel-2.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Let's Save More Lifes With Our Helping Hand
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Saving life is to Almighty but as a creation of him its
                        just our duty to help other creation.
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="a"
                      >
                        Learn More
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="assets/img/about-1.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="assets/img/about-2.jpg"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  About Us
                </div>
                <h1 className="display-6 mb-5">
                  We Help People In Need Around The World
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem sed
                    stet lorem sit clita duo justo erat amet
                  </p>
                  <span className="text-primary">Jhon Doe, Founder</span>
                </div>
                <p className="mb-5">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <a className="btn btn-primary py-2 px-3 me-3" href="a">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
                <a className="btn btn-outline-primary py-2 px-3" href="a">
                  Contact Us
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Causes Start --> */}
      <div className="container-xxl bg-light my-5 py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Feature Causes
            </div>
            <h1 className="display-6 mb-5">
              Every Child Deserves The Opportunity To Learn
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Education</small>
                  </div>
                  <h5 className="mb-3">Education For African Children</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/courses-1.jpg"
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="a">
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Pure Water</small>
                  </div>
                  <h5 className="mb-3">Ensure Pure Drinking Water</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/courses-2.jpg"
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="a">
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                  <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                    <small>Healthy Life</small>
                  </div>
                  <h5 className="mb-3">Ensure Medical Treatment</h5>
                  <p>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </p>
                  <div className="causes-progress bg-light p-3 pt-2">
                    <div className="d-flex justify-content-between">
                      <p className="text-dark">
                        $10,000 <small className="text-body">Goal</small>
                      </p>
                      <p className="text-dark">
                        $9,542 <small className="text-body">Raised</small>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/courses-3.jpg"
                    alt=""
                  />
                  <div className="causes-overlay">
                    <a className="btn btn-outline-primary" href="a">
                      Read More
                      <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Causes End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              What We Do
            </div>
            <h1 className="display-6 mb-5">
              Learn More What We Do And Get Involved
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/icon-1.png"
                  alt=""
                />
                <h4 className="mb-3">Child Education</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="a">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/icon-2.png"
                  alt=""
                />
                <h4 className="mb-3">Medical Treatment</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="a">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/icon-3.png"
                  alt=""
                />
                <h4 className="mb-3">Pure Drinking Water</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="a">
                  Learn More
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Donate Start --> */}
      <div
        className="container-fluid donate my-5 py-5"
        data-parallax="scroll"
        data-image-src="assets/img/carousel-2.jpg"
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Donate Now
              </div>
              <h1 className="display-6 text-white mb-5">
                Thanks For The Results Achieved With You
              </h1>
              <p className="text-white-50 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100 bg-white p-5">
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        {/* <label for="name">Your Name</label> */}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-light border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-group d-flex justify-content-around">
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          checked
                        />
                        <label className="btn btn-light py-3" for="btnradio1">
                          $10
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                        />
                        <label className="btn btn-light py-3" for="btnradio2">
                          $20
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio3"
                        />
                        <label className="btn btn-light py-3" for="btnradio3">
                          $30
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary px-5"
                        style={{ height: "60px" }}
                      >
                        Donate Now
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Donate End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Team Members
            </div>
            <h1 className="display-6 mb-5">
              Let's Meet With Our Ordinary Soldiers
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-1.jpg"
                    alt=""
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <p className="text-primary">Designation</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-2.jpg"
                    alt=""
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <p className="text-primary">Designation</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-3.jpg"
                    alt=""
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <p className="text-primary">Designation</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/team-4.jpg"
                    alt=""
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Full Name</h5>
                  <p className="text-primary">Designation</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="a">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Testimonial
            </div>
            <h1 className="display-6 mb-5">
              Trusted By Thousands Of People And Nonprofits
            </h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets/img/testimonial-1.jpg"
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                  duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                  clita erat magna elitr erat sit sit erat at rebum justo sea
                  clita.
                </p>
                <h5 className="mb-1">Doner Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets/img/testimonial-2.jpg"
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                  duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                  clita erat magna elitr erat sit sit erat at rebum justo sea
                  clita.
                </p>
                <h5 className="mb-1">Doner Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="assets/img/testimonial-3.jpg"
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                  duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                  clita erat magna elitr erat sit sit erat at rebum justo sea
                  clita.
                </p>
                <h5 className="mb-1">Doner Name</h5>
                <span className="fst-italic">Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </div>
  );
}
