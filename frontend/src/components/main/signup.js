import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const url = app_config.backend_url;

  const userForm = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    createdAt: new Date(),
  };

  const navigate = useNavigate();

  const formSubmit = (formdata) => {
    console.log(formdata);

    // asynchronous function returns promise
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);

          Swal.fire({
            icon: "success",
            title: "Registered Successfully!!",
          });
          navigate("/main/login");
        });
      }
    });
  };

  return (
    <div style={styles.container}>
      <Formik initialValues={userForm} onSubmit={formSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <section class="text-center text-lg-start">
            <div class="container py-4">
              <div class="row g-0 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                  <div class="card cascading-right">
                    <div class="card-body p-5 shadow-5 text-center">
                      <h2 class="fw-bold mb-5">Sign up now</h2>
                      <form onSubmit={handleSubmit}>
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="name"
                                onChange={handleChange}
                                value={values.name}
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example1">
                                Full Name
                              </label>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="email"
                                id="email"
                                onChange={handleChange}
                                value={values.email}
                                class="form-control"
                              />
                              <label class="form-label" for="form3Example2">
                                Email
                              </label>
                            </div>
                          </div>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="number"
                            id="mobile"
                            onChange={handleChange}
                            value={values.mobile}
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example3">
                            Phone Number
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example4">
                            Password
                          </label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example33"
                            checked
                          />
                          <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                          </label>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>

                        <div class="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i class="fab fa-github"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                  <img
                    src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                    class="w-100 rounded-4 shadow-4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    background:
      "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/signup_back.png)",
    height: "100vh",
    backgroundSize: "cover",
  },
};

export default Signup;
