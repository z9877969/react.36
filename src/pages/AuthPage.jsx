import LabelInput from "../components/_shared/LabelInput/LabelInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { registerApi, loginApi } from "../utils/services/firebaseApi";
import { register } from "../redux/auth/auth-operations";
function AuthPage() {
  const { authType } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const redirect = () => {
    authType === "login" && navigate("/auth/register");
    authType === "register" && navigate("/auth/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authType === "login" && console.log("login");
    authType === "register" && console.log("register");
    dispatch(register({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <LabelInput
        title="Email"
        placeholder="input email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <LabelInput
        title="Password"
        placeholder="input password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button type="submit">
        {authType === "login" ? "Log In" : "Sign Up"}
      </button>
      <Link to={authType === "register" ? "/auth/login" : "/auth/register"}>
        {authType === "login" ? "Sign Up" : "Log In"}
      </Link>
    </form>
  );
}
export default AuthPage;
