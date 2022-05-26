import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const url = app_config.backend_url;

  const userForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Successfully Logged In!",
          icon: "success",
        });

        res.json().then((data) => {
          if (data.isAdmin) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/dashboard");
            return;
          } else {
            sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/user/managevideo");
            return;
          }
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };

  return (
    <div style={styles.container}>
      <Formik initialValues={userForm} onSubmit={loginSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <section class="vh-100">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                    class="card shadow-2-strong"
                    style={{ borderRadius: "1rem" }}
                  >
                    <div class="card-body p-5 text-center">
                      <h3 class="mb-5">Sign in</h3>
                      <form onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                          <TextField
                            variant="outlined"
                            label="Email"
                            type="email"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            className="w-100"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <TextField
                            type="password"
                            label="Password"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            className="w-100"
                          />
                        </div>

                        <div class="form-check d-flex justify-content-start mb-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                          />
                          <label class="form-check-label" for="form1Example3">
                            {" "}
                            Remember password{" "}
                          </label>
                        </div>

                        <button
                          class="btn btn-primary btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </form>

                      <hr class="my-4" />
                      <GoogleLogin
                        clientId="436370605107-a1a87949khjquees4o8m7cjeq3mpiu8b.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={(data) => {
                          console.log(data);
                        }}
                        onFailure={(err) => console.error(err)}
                        cookiePolicy={"single_host_origin"}
                      />
                      <button
                        class="btn btn-lg btn-block btn-primary"
                        style={{ backgroundColor: "#dd4b39" }}
                        type="submit"
                      >
                        <i class="fab fa-google me-2"></i> Sign in with google
                      </button>
                      <button
                        class="btn btn-lg btn-block btn-primary mb-2"
                        style={{ backgroundColor: "#3b5998" }}
                        type="submit"
                      >
                        <i class="fab fa-facebook-f me-2"></i>Sign in with
                        facebook
                      </button>
                    </div>
                  </div>
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

export default Login;
