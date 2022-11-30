import React from "react";

export default function Home() {
  return (
    <div>
      {/* <!-- Carousel
    ================================================== --> */}
      <div
        id="homeCarousel"
        className="carousel slide carousel-home"
        data-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li
            data-target="#homeCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#homeCarousel" data-slide-to="1"></li>
          <li data-target="#homeCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="assets/images/slider/home-slider-1.jpg" alt="" />

            <div className="container">
              <div className="carousel-caption">
                <h2 className="carousel-title bounceInDown animated slow">
                  Because they need your help
                </h2>
                <h4 className="carousel-subtitle bounceInUp animated slow ">
                  Do not let them down
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </a>
              </div>
              {/* <!-- /.carousel-caption --> */}
            </div>
          </div>
          {/* <!-- /.item --> */}

          <div className="item ">
            <img src="assets/images/slider/home-slider-2.jpg" alt="" />

            <div className="container">
              <div className="carousel-caption">
                <h2 className="carousel-title bounceInDown animated slow">
                  Together we can improve their lives
                </h2>
                <h4 className="carousel-subtitle bounceInUp animated slow">
                  {" "}
                  So let's do it !
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </a>
              </div>
              {/* <!-- /.carousel-caption --> */}
            </div>
          </div>
          {/* <!-- /.item --> */}

          <div className="item ">
            <img src="assets/images/slider/home-slider-3.jpg" alt="" />

            <div className="container">
              <div className="carousel-caption">
                <h2 className="carousel-title bounceInDown animated slow">
                  A penny is a lot of money, if you have not got a penny.
                </h2>
                <h4 className="carousel-subtitle bounceInUp animated slow">
                  You can make the diffrence !
                </h4>
                <a
                  href="#"
                  className="btn btn-lg btn-secondary hidden-xs bounceInUp animated slow"
                  data-toggle="modal"
                  data-target="#donateModal"
                >
                  DONATE NOW
                </a>
              </div>
              {/* <!-- /.carousel-caption --> */}
            </div>
          </div>
          {/* <!-- /.item --> */}
        </div>

        <a
          className="left carousel-control"
          href="#homeCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-angle-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="right carousel-control"
          href="#homeCarousel"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-angle-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* <!-- /.carousel --> */}

      <div className="section-home about-us fadeIn animated">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="about-us-col">
                <div className="col-icon-wrapper">
                  <img src="assets/images/icons/our-mission-icon.png" alt="" />
                </div>
                <h3 className="col-title">our mission</h3>
                <div className="col-details">
                  <p>
                    Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                    lectus ut eta esami vera dolor sit amet consect
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="about-us-col">
                <div className="col-icon-wrapper">
                  <img
                    src="assets/images/icons/make-donation-icon.png"
                    alt=""
                  />
                </div>
                <h3 className="col-title">Make donations</h3>
                <div className="col-details">
                  <p>
                    Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                    lectus ut eta esami vera dolor sit amet consect
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="about-us-col">
                <div className="col-icon-wrapper">
                  <img src="assets/images/icons/help-icon.png" alt="" />
                </div>
                <h3 className="col-title">Help & support</h3>
                <div className="col-details">
                  <p>
                    Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                    lectus ut eta esami vera dolor sit amet consect
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="about-us-col">
                <div className="col-icon-wrapper">
                  <img src="assets/images/icons/programs-icon.png" alt="" />
                </div>
                <h3 className="col-title">our programs</h3>
                <div className="col-details">
                  <p>
                    Lorem ipsum dolor sit amet consect adipisscin elit proin vel
                    lectus ut eta esami vera dolor sit amet consect
                  </p>
                </div>
                <a href="#" className="btn btn-primary">
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.about-us --> */}

      <div className="section-home home-reasons">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="reasons-col animate-onscroll fadeIn">
                <img src="assets/images/reasons/we-fight-togother.jpg" alt="" />

                <div className="reasons-titles">
                  <h3 className="reasons-title">We fight together</h3>
                  <h5 className="reason-subtitle">We are humans</h5>
                </div>

                <div className="on-hover hidden-xs">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga.
                  </p>

                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga.
                  </p>

                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="reasons-col animate-onscroll fadeIn">
                <img src="assets/images/reasons/we-care-about.jpg" alt="" />

                <div className="reasons-titles">
                  <h3 className="reasons-title">WE care about others</h3>
                  <h5 className="reason-subtitle">We are humans</h5>
                </div>

                <div className="on-hover hidden-xs">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga.
                  </p>

                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga.
                  </p>

                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tenetur praesentium, itaque facilis nesciunt ab omnis cumque
                    similique ipsa veritatis perspiciatis, harum ad at nihil
                    molestias, dignissimos sint consequuntur. Officia, fuga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.home-reasons --> */}

      <div className="section-home our-causes animate-onscroll fadeIn">
        <div className="container">
          <h2 className="title-style-1">
            Our Causes <span className="title-under"></span>
          </h2>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="assets/images/causes/cause-hunger.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    10$ / 500$
                  </div>
                </div>

                <h4 className="cause-title">
                  <a href="#">HUNGER AND POVERTY </a>
                </h4>
                <div className="cause-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                  eros rutrum turpis viverra elementum semper quis ex. Donec
                  lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                </div>

                <div className="btn-holder text-center">
                  <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a>
                </div>
              </div>
              {/* <!-- /.cause --> */}
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="assets/images/causes/cause-education.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    400$ / 700$
                  </div>
                </div>

                <h4 className="cause-title">
                  <a href="#">EDUCATION AND TRAINING</a>
                </h4>
                <div className="cause-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                  eros rutrum turpis viverra elementum semper quis ex. Donec
                  lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                </div>

                <div className="btn-holder text-center">
                  <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a>
                </div>
              </div>
              {/* <!-- /.cause --> */}
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="assets/images/causes/cause-rights.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    400$ / 1000$
                  </div>
                </div>

                <h4 className="cause-title">
                  <a href="#">HUMAN RIGHTS</a>
                </h4>
                <div className="cause-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                  eros rutrum turpis viverra elementum semper quis ex. Donec
                  lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                </div>

                <div className="btn-holder text-center">
                  <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a>
                </div>
              </div>
              {/* <!-- /.cause --> */}
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="cause">
                <img
                  src="assets/images/causes/cause-culture.jpg"
                  alt=""
                  className="cause-img"
                />

                <div className="progress cause-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    400$ / 700$
                  </div>
                </div>

                <h4 className="cause-title">
                  <a href="#">ARTS AND CULTURE </a>
                </h4>
                <div className="cause-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at
                  eros rutrum turpis viverra elementum semper quis ex. Donec
                  lorem nulla, aliquam quis neque vel, maximus lacinia urna.
                </div>

                <div className="btn-holder text-center">
                  <a
                    href="#"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#donateModal"
                  >
                    {" "}
                    DONATE NOW
                  </a>
                </div>
              </div>
              {/* <!-- /.cause --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.our-causes --> */}

      <div className="section-home our-sponsors animate-onscroll fadeIn">
        <div className="container">
          <h2 className="title-style-1">
            Our Sponsors <span className="title-under"></span>
          </h2>

          <ul className="owl-carousel list-unstyled list-sponsors">
            <li>
              {" "}
              <img src="assets/images/sponsors/bus.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/wikimedia.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/one-world.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/wikiversity.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/united-nations.png" alt="" />
            </li>

            <li>
              {" "}
              <img src="assets/images/sponsors/bus.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/wikimedia.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/one-world.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/wikiversity.png" alt="" />
            </li>
            <li>
              {" "}
              <img src="assets/images/sponsors/united-nations.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- /.our-sponsors --> */}
    </div>
  );
}
