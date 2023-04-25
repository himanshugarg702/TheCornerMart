import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  // console.log(loginNameRef);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  // async function submit(e) {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post("http://localhost:8000/", {
  //         email,
  //         password,
  //       })
  //       .then((res) => {
  //         if (res.data == "exist") {
  //           history("/home", { state: { id: email } });
  //         } else if (res.data === "notexist") {
  //           history("/register", { state: { id: email } });
  //           alert("user not exist pls sign up");
  //         }
  //       });
  //     console.log(e)
  //     .catch((e) => {
  //       alert("wrong details");
  //       console.log(e);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", { email, password });
      // toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
      navigate("/");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form
                action="POST"
                className="form mb-5"
                onSubmit={handleSubmit}
              >
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    // ref={loginNameRef}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    // ref={loginPasswordRef}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="addTOCart__btn"
                  // onClick={submit}
                >
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
