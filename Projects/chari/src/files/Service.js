import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Service() {
  const [service, setService] = useState([]);
  console.log(service);

  useEffect(() => {
    allService();
  }, []);

  const allService = async () => {
    axios
      // .get("http://localhost/ReactJs/Projects/chari/api/service.php")
      .get("api/service.php")
      .then((res) => {
        console.log(res.data.datas.pr);
        setService(res.data.datas.pr);
      });
  };

  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Service
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="a">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="a">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-6 mb-5">Menu List</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {service.map((item, index) => (
                <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                  <img
                    className="img-fluid mb-4"
                    src="assets/img/icon-1.png"
                    alt=""
                  />
                  {/* <h4 className="mb-3">Morning Tea</h4> */}
                  <h4 className="mb-3">{item.name}</h4>
                  <p className="mb-4">{item.description}</p>
                  <a className="btn btn-outline-primary px-3" href="a">
                    Details
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              ))}
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
                <h4 className="mb-3">Lunch Box</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="a">
                  Details
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
                <h4 className="mb-3">Evening Snacks</h4>
                <p className="mb-4">
                  Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
                  diam justo sed vero dolor duo.
                </p>
                <a className="btn btn-outline-primary px-3" href="a">
                  Details
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
    </div>
  );
}
