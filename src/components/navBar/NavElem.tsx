import { ResBtn } from "../../pages/results/ResultsPage.style";
import { NavBar } from "../../pages/start/StartPage.style";
import React, { useContext } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../../context/AuthContext";

const NavElem = () => {
  const { auth } = useContext(Context);
  let [user] = useAuthState(auth);
  const { logOut } = useAuth();

  return (
    <NavBar>
      <div>
        <p>{user ? auth.currentUser.email : ""}</p>
      </div>
      <div>
        <ResBtn to="/signin" onClick={logOut}>
          Log out
        </ResBtn>
      </div>
    </NavBar>
  );
};

export default NavElem;
