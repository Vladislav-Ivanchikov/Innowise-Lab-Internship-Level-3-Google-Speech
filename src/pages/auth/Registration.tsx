import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../../index";
import { useAuth } from "../../context/AuthContext";
import { Btn, Start } from "../start/StartPage.style";
import { Input } from "./Form.style";

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { register } = useAuth();
  const { auth } = useContext(Context);

  const regNewUser = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (email && password) {
        await register(email, password);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: `You are registered in Speech under the name - ${auth.currentUser.email}`,
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        await Swal.fire({
          position: "top",
          icon: "warning",
          title: `Please fill all lines`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch {
      await Swal.fire({
        position: "top",
        icon: "error",
        title: `Something went wrong, please try letter`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <Start visible={true}>
      <h2>Registration</h2>
      <form action="">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Btn onClick={regNewUser} type="submit">
          Registration
        </Btn>
      </form>
      <div>
        <p>
          If you have account, you can <Link to="/signin">log in</Link>
        </p>
      </div>
    </Start>
  );
};

export default Registration;
