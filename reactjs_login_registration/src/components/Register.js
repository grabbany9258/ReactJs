import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/ReactJs/reactjs_login_registration/api/registration.php",
        info
      )
      .then((res) => {
        // alert(res.data);
        if (res.data.empty) {
          alert(res.data.empty);
        }
        if (res.data.duplicate) {
          alert(res.data.duplicate);
        }
        if (res.data.success) {
          alert(res.data.success);
          navigate("/login");
        }

        // console.log(res.data);
        // alert(res.data);
        // navigate("/login");
      });
  };
  // console.log(info);

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#c9c0bb" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Register Form
                      </p>

                      <form onSubmit={formSubmit} className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              className="form-control"
                              onChange={changeValue}
                            />
                            <label className="form-label" for="form3Example1c">
                              First Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lname"
                              name="lname"
                              className="form-control"
                              onChange={changeValue}
                            />
                            <label className="form-label" for="form3Example4cd">
                              Last Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="email"
                              name="email"
                              className="form-control"
                              onChange={changeValue}
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              onChange={changeValue}
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
