import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import Tv from "./Components/Tv/Tv.jsx";
import People from "./Components/People/People.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import RootLayout from "./Components/RootLayout/RootLayout.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import ItemDetails from "./Components/ItemDetails/ItemDetails.jsx";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import About from "./Components/About/About.jsx";
// eslint-disable-next-line no-unused-vars
import { Offline, Online } from "react-detect-offline";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import AuthContext from "../src/Context/AuthContext.jsx";

function App() {
  const [userData, setuserData] = useState(null);

  function saveUserData({ saveUserData }) {
    let encodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken);
  }
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout setuserData={setuserData} userData={userData} />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home userData={userData} />,
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute userData={userData}>
              <Movies />
            </ProtectedRoute>
          ),
        },
        {
          path: "itemdetails/:id/:mediaType",
          element: <ItemDetails />,
        },
        {
          path: "people",
          element: (
            <ProtectedRoute userData={userData}>
              <People />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute userData={userData}>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "tv",
          element: (
            <ProtectedRoute userData={userData}>
              <Tv />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);
  return (
    <>
      <div>
        <Offline>
          <div className="offline-status">You're Offline</div>
        </Offline>
      </div>

        <RouterProvider router={routers} />
    </>
  );
}
export default App;
