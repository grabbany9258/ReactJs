import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Customers() {
  const [customer, setCustomer] = useState([]);
  console.log(customer);

  useEffect(() => {
    allCustomer();
  }, []);

  const allCustomer = async () => {
    axios
      .get("http://localhost/ReactJs/Projects/chari/api/customer.php")
      // .get("api/customer.php")
      .then((res) => {
        console.log(res.data.datas.pr);
        setCustomer(res.data.datas.pr);
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
            Customer List
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
                Category
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div className="container">
        <h1 className="textAlign: center">Customer List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.employee_name}</td>
                <td>{item.designation}</td>
                <td>{item.phone_nb}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Direct loop diye kora hoyece list akare dekhano hoyece  */}
        {/* {category.map((item, index) => (
          <li> {item.categories_name} </li>
        ))} */}
      </div>
    </div>
  );
}
