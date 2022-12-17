import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Category() {
  const [category, setCategory] = useState([]);
  console.log(category);

  useEffect(() => {
    allCat();
  }, []);

  const allCat = async () => {
    axios
      .get("http://localhost/ReactJs/Projects/chari/api/category.php")
      .then((res) => {
        console.log(res.data.datas.pr);
        setCategory(res.data.datas.pr);
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
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <h1>
        {category.map((item, index) => (
          <li> {item.categories_name} </li>
        ))}
      </h1>
    </div>
  );
}
