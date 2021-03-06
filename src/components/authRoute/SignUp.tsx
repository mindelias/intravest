import React, { useState, useEffect } from "react";
import LoginWrapper from "../atomicComponents/LoginWrapper";
import { useHistory } from "react-router";
import financee from "../assets/four.svg";
import loader from "../assets/loader.svg";
import { connect } from "react-redux";
import { Register } from "../redux/Auth/Auth.action";
import AlertView from "../layouts/Alert";
import { Alert } from "../redux/alert/AlertAction";
import NavBar from "../Navbar";
// import styled from 'styled-components'

interface props {
  reg: (args: any) => void;
  Auth: boolean;
  error: any;
  loading: boolean;
  Alert: (arg1: string, arg2: string) => void;
}

const SignUp: React.FC<props> = ({ reg, Auth, Alert, error, loading }) => {
  const history = useHistory();
  useEffect(() => {
    if (Auth === true) {
      history.push("/createacc");
    }
    if (error && error.error) {
      console.log(error);
      Alert(error["issue"], "danger");
      const getErr = error.error;
      const arr = Object.keys(getErr);
      // eslint-disable-next-line
      arr.map((item) => {
        Alert(getErr[item], "danger");
      });
      console.log(arr);
    }
    // eslint-disable-next-line
  }, [reg, Auth, error]);
  // const []
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    type: "",
    password: "",
    confirm_password: "",
    business_name: "",
    company_name: "",
    phone_number: "",
  });
  const [isBusiness, setBusiness] = useState(false);

  const {
    first_name,
    last_name,
    email,
    type,
    password,
    confirm_password,
    business_name,
    phone_number,
    company_name,
  } = user;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const regex = new RegExp(
    //   "/^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/"
    // );
    // const valid = regex.test(password);
    // console.log(valid, user);
    // if (!valid) {
    //   Alert("Please enter a valid password", "danger");
    // }

    if (!first_name || !last_name || !email || !password || !confirm_password) {
      Alert("Please enter all fields", "danger");
    } else if (password !== confirm_password) {
      Alert("Password do not match", "danger");
    } else if (password.length < 8) {
      Alert(
        `Password must be atleast 8 charcters, you are currently using ${password.length} character`,
        "danger"
      );
    } else {
      reg(user);
    }
  };
  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);

    if (user.type === "business" || user.type === "merchant") {
      setBusiness(true);
    }

    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onchangeInputSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(user);

    if (user.type === "business") {
      setBusiness(true);
      console.log(user.type);
    }
    setUser({ ...user, type: e.target.value });
  };
  // html view

  return (
    <div>
      <NavBar />
      <LoginWrapper className="container">
        {loading ? (
          <div className="loader">
            <img
              style={{ width: "80px", zIndex: 5 }}
              src={loader}
              alt="loader"
            />
          </div>
        ) : (
          <div className="row">
            <div className="col-md-6 bg-right text-center">
              <img src={financee} alt="sigup-igs" />
            </div>
            <div className="formview col-md-6 col-xs-12">
              <AlertView />
              <form className="" onSubmit={handleSubmit}>
                <h5 className="text-center  my-2"> Register to get started </h5>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="full"
                    name="first_name"
                    placeholder="Enter firstname"
                    value={first_name}
                    onChange={onchangeInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="full"
                    name="last_name"
                    placeholder="Enter lastname"
                    value={last_name}
                    onChange={onchangeInput}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    value={type}
                    onChange={onchangeInputSelect}
                  >
                    <option value="customer">Customer</option>
                    <option value="merchant">Merchant</option>
                    <option value="business">Business</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={onchangeInput}
                  />
                </div>

                <div className="form-group">
                  {isBusiness && (
                    <input
                      type="text"
                      className="form-control"
                      id="full"
                      name="phone_number"
                      placeholder="Enter phone"
                      value={phone_number}
                      onChange={onchangeInput}
                    />
                  )}
                  {isBusiness && (
                    <input
                      type="text"
                      className="form-control"
                      id="full"
                      name="business_name"
                      placeholder="Enter busines name"
                      value={business_name}
                      onChange={onchangeInput}
                    />
                  )}
                  {isBusiness && (
                    <input
                      type="text"
                      className="form-control"
                      id="full"
                      name="company_name"
                      placeholder="Enter busines name"
                      value={company_name}
                      onChange={onchangeInput}
                    />
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={onchangeInput}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Confirm password"
                    name="confirm_password"
                    value={confirm_password}
                    onChange={onchangeInput}
                  />
                </div>

                <button type="submit" className="btn btn-info btn-block">
                  Register
                </button>
              </form>
            </div>
          </div>
        )}
      </LoginWrapper>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  Auth: state.Auth.isAuthenticated,
  error: state.Auth.error,
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, { reg: Register, Alert })(SignUp);
