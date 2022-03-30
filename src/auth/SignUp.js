import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function SignUp() {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div id="first">
                <div className="myform form ">
                  <div className="logo mb-3">
                    <div className="col-md-12 text-center">
                      <h1>S'inscrire</h1>
                    </div>
                  </div>
                  <form action="" name="login">
                    <div className="row form-group">
                      <div className="col-6">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                          id="first_name"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                      <div className="col-6">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                          type="text"
                          name="first_name"
                          className="form-control"
                          id="first_name"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <p className="text-right" style={{ color: "red" }}>
                        By error name
                      </p>
                    </div>

                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <p className="text-right" style={{ color: "red" }}>
                        By error Télephone
                      </p>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Télephone</label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <p className="text-right" style={{ color: "red" }}>
                        By error Télephone
                      </p>
                    </div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="form-group">
                      <p className="text-right" style={{ color: "red" }}>
                        By error option
                      </p>
                    </div>
                    <div className="form-group mt-3">
                      <label for="exampleInputEmail1">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                      />
                    </div>
                    <div className="form-group">
                      <p className="text-right" style={{ color: "red" }}>
                        By error password
                      </p>
                    </div>
                    <div className="col-md-12 text-center ">
                      <button
                        type="submit"
                        className=" btn btn-block mybtn btn-primary tx-tfm"
                      >
                        Login
                      </button>
                    </div>
                    <div className="col-md-12 ">
                      <div className="login-or">
                        <hr className="hr-or" />
                        <span className="span-or">or</span>
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="text-center">
                        Don't have account?{" "}
                        <NavLink to={"/login"} href="#" id="signup">
                          Sign in here
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
