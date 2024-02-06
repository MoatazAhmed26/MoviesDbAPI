import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
export default function Login() {
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  // Assign Input To Empty
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Get User's Data From Inputs
  function getUserData(eventInfo) {
    let myUser = { ...user };
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myUser);
  }
  // Send User's Registration To Api
  async function sendLoginDataToApi() {
    // Send Data To Api and Wait For Response

    let { data } = await axios.post(
      `https://route-egypt-api.herokuapp.com/signin`,
      user
    );
    if (data.message === "success") {
      navigate("/home");
      localStorage.setItem("userToken", data.token);

      setisLoading(false);
    } else {
      setisLoading(false);
      setError(data.message);
    }
    console.log(data);
  }
  // Sumbit User's Data To Api
  function submitLoginForm(e) {
    e.preventDefault(); // Prevent Form Page Reloding
    setisLoading(true);
    let validation = validateLoginForm();
    if (validation.error) {
      setisLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendLoginDataToApi();
    }
  }
  // Validate Login Form Before Sending It To The Server
  function validateLoginForm() {
    let scheme = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^[A-Z][a-z]{3,6}/)
        .required(),
    });
    return scheme.validate(user, { abortEarly: false });
  }
  
  return (
    <>
      <form onSubmit={submitLoginForm}>
        <label htmlFor="email">Email :</label>
        <input
          onChange={getUserData}
          className="form-control my-input my-2"
          type="email"
          id="email"
          name="email"
        />
        {errorList.map((error, index) => {
          if (error.context.label === "email") {
            return (
              <div key={index} className="alert alert-danger">
                Email is invalid
              </div>
            );
          } else {
            return "";
          }
        })}
        <label htmlFor="password">Password :</label>
        <input
          onChange={getUserData}
          className="form-control my-input my-2"
          type="password"
          id="password"
          name="password"
        />
        <button className="btn btn-info">
          {isLoading === true ? (
            <i className="fas fa-spinner fa-spin"></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}
