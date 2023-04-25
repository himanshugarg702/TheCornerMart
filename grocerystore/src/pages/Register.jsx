import React, { useCallback, useRef,useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [user,setUser]=useState({
  //   name:"",email:"",
  // })
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupConfirmPasswordRef = useRef();
  const signupEmailRef = useRef();
  const submitHandler = useCallback( ()=>
    (e) => {
    e.preventDefault();
    const data={
      name:signupNameRef.current?.value,
      email:signupEmailRef.current?.value,
      password:signupPasswordRef.current?.value,
      passwordConfirmation:signupConfirmPasswordRef.current?.value,
    };
    console.log(data);
  },[]
  );
  // async function submit(e){
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:8000/register ',{
  //       email,password
  //     })
  //     .then(res=>{
  //       if(res.data=='exist'){
  //         history("/login",{state:{id:email}})
  //         alert("user already exist pls log in");
  //       }
  //       else if(res.data=='notexist'){
  //         history("/login",{state:{id:email}})
  //        }
  //     })
  //     .catch(e=>{
  //       alert("wrong details");
  //       console.log(e);
  //     })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/register", { username, email, password });
      // toast.success("User Register Successfully");
      navigate("/login");
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
   
    <Helmet title="Signup">
      
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="POST" className="form mb-5"
               onSubmit={handleSubmit}
               >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}

                    onChange={(e)=>{setUsername(e.target.value)}} //for backend i use
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                    onChange={(e)=>{setEmail(e.target.value)}} 
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                    onChange={(e)=>{setPassword(e.target.value)}} 
                  />
                </div>
                {/* <div className="form__group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    ref={signupConfirmPasswordRef}
                  />
                </div> */}
                <button type="submit" className="addTOCart__btn"
                // onClick={submit}
                >
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
