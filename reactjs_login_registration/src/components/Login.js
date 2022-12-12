import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost/ReactJs/reactjs_login_registration/api/login.php",
        user
      )
      .then((res) => {
        if (res.data.success) {
          //console.log(res.data);
          navigate("/dashboard");
        }
        alert(res.data.msg);
      });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <form onSubmit={formSubmit}>
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        name="email"
                      />
                      <label className="form-label" for="typeEmailX-2">
                        Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        onChange={handleChange}
                        name="password"
                      />
                      <label className="form-label" for="typePasswordX-2">
                        Password
                      </label>
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                        onChange={handleChange}
                      />
                      <label className="form-check-label" for="form1Example3">
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>

                    <hr className="my-4" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
