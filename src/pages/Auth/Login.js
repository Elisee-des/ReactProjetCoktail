import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

const Login = () => {
  // const [username, setUsername] = useState("Elisee");
  // const [password, setPassword] = useState("0000");

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "esabidani@gmail.com",
    password: "user",
  });

  const handChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    accountService
      .login(credentials)
      .then((res) => {
        console.log(res.data);
        accountService.saveToken(res.data.access_token);
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">Coktail App</span>
                  </a>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p className="text-center small">
                        Enter your username & password to login
                      </p>
                    </div>

                    <form
                      onSubmit={handSubmit}
                      className="row g-3 needs-validation"
                      noValidate
                    >
                      <div className="col-12">
                        <label htmlFor="youremail" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={credentials.email}
                            onChange={handChange}
                            id="youremail"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your email.
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={credentials.password}
                          onChange={handChange}
                          id="yourPassword"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your password!
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have account?{" "}
                          <a href="pages-register.html">Create an account</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                {/* <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
