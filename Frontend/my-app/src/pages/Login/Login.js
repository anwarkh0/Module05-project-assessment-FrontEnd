import { useState } from "react";
import style from "./Login.module.css";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useUserStore } from "../../Store";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  async function handleLogin() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ENDPOINT}user/login`,
        { ...credentials, email: credentials.username }
      );
      console.log(response);
      if (response.status) {
        setUser(response.data);
        if (response.data.isAdmin)
          return navigate("/dashboard", { replace: true });
      } else {
        return navigate("/", { replace: true });
      }
    } catch (error) {
      if (error.message === "Network Error") {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    }
  }
  return (
    <section className={style.loginPageContainer}>
      <section className={style.loginFormContainer}>
        <h1 className={style.header}>Sign In</h1>
        <section className={style.inputsContainer}>
          <Input
            value={credentials}
            setValue={setCredentials}
            label="Email or Username"
            control="username"
            isDisabled={loading}
            required
          />
          <Input
            value={credentials}
            setValue={setCredentials}
            label="Password"
            control="password"
            type="password"
            required
          />
          <section className={style.btnsWrapper}>
            <button className={style.loginButton} onClick={handleLogin}>
              Login
            </button>
            <Link to={"/"} className={style.homepageBtn}>
              
              Homepage
            </Link>
          </section>
          <span>
            You don't have an account?{" "}
            <NavLink className={style.navLink} to="/signup">
              SignUp
            </NavLink>
          </span>
        </section>
      </section>
    </section>
  );
}

export default Login;
