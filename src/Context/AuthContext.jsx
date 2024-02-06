import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
export let AuthContext = createContext(null);
function AuthConextProvider(props) {
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
  return (
    <AuthContext.Providers value={{ userData, setuserData }}>
      {props.children}
    </AuthContext.Providers>
  );
}
export default AuthConextProvider;
