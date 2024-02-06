import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi, { func } from "joi";
export default function Register() {
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  // Assign Input To Empty
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
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
  async function sendRegisterDataToApi() {
    // Send Data To Api and Wait For Response

    let { data } = await axios.post(
      `https://route-egypt-api.herokuapp.com/signup`,
      user
    );
    if (data.message === "success") {
      navigate("/login");
      //login|home
      setisLoading(false);
    } else {
      setisLoading(false);
      setError(data.message);
    }
    console.log(data);
  }
  // Sumbit User's Data To Api
  function submitRegisterForm(e) {
    e.preventDefault(); // Prevent Form Page Reloding
    setisLoading(true);
    let validation = validateRegisterForm();
    if (validation.error) {
      setisLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendRegisterDataToApi();
    }
  }
  // Validate The Registeration inputs Form
  function validateRegisterForm() {
    let scheme = Joi.object({
      first_name: Joi.string()
        .pattern(/^[A-Z]/)
        .min(3)
        .max(10)
        .required(),
      last_name: Joi.string()
        .pattern(/^[A-Z]/)
        .min(3)
        .max(10)
        .required(),
      age: Joi.number().min(16).max(80).required(),
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
      <form onSubmit={submitRegisterForm}>
        <label htmlFor="first_name">First Name :</label>
        <input
          onChange={getUserData}
          className="form-control my-input my-2"
          type="text"
          id="first_name"
          name="first_name"
        />
        {errorList.map((error, index) => {
          if (error.context.label === "first_name") {
            return (
              <div key={index} className="alert alert-danger">
                First Name is invalid
              </div>
            );
          } else {
            return "";
          }
        })}
        <label htmlFor="last_name">Last Name :</label>
        <input
          onChange={getUserData}
          className="form-control my-input my-2"
          type="text"
          id="last_name"
          name="last_name"
        />
        {errorList.map((error, index) => {
          if (error.context.label === "last_name") {
            return (
              <div key={index} className="alert alert-danger">
                Last Name is invalid
              </div>
            );
          } else {
            return "";
          }
        })}
        <label htmlFor="age">Age :</label>
        <input
          onChange={getUserData}
          className="form-control my-input my-2"
          type="number"
          id="age"
          name="age"
        />
        {errorList.map((error, index) => {
          if (error.context.label === "age") {
            return (
              <div key={index} className="alert alert-danger">
                Age is invalid
              </div>
            );
          } else {
            return "";
          }
        })}
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
            "Register"
          )}
        </button>
      </form>
    </>
  );
}
