import { ResLink } from "../../pages/results/ResultsPage.style";
import { Navigate } from "../../pages/start/StartPage.style";
import React, { useContext } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../../context/AuthContext";

const NavBar: React.FC = () => {
  const { auth } = useContext(Context);
  let [user] = useAuthState(auth);
  const { logOut } = useAuth();

  return (
    <Navigate>
      <div>
        <p>{user ? auth.currentUser.email : ""}</p>
      </div>
      <div>
        <ResLink to="/signin" onClick={logOut}>
          Log out
        </ResLink>
      </div>
    </Navigate>
  );
};

export default NavBar;
