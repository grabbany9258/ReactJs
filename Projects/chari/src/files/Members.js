import React from "react";

export default function Members() {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Permanent Doners
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
                Causes
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
    </div>
  );
}
