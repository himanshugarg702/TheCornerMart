import React, { useRef, useEffect } from "react";
import Register from "../../pages/Register";
import { Container } from "reactstrap";
import logo from "../../assets/Groceries/grocerylogo.jpg";
import { NavLink, Link,useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import toast from 'react-hot-toast'
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import Home from "../../pages/Home";
import "../../styles/header.css";
import { useAuth0 } from "@auth0/auth0-react";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Grocery",
    path: "/grocery",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
const {loginWithRedirect}=useAuth0();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
        console.log(loggedIn)
  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
          <Link to="/home">
          <img  src={logo} alt="logo" />
              </Link>
            <h5>The Corner Mart</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
{loggedIn?(  
<>
<span className="user">
              {/* <button onClick={()=>loginWithRedirect()}>Login</button> */}
              <Link to="/">
                {/* <i class="ri-user-line"></i> */}
                Home
              </Link>
            </span>
            <span className="user">
              {/* <button onClick={()=>loginWithRedirect()}>Login</button> */}
              <Link to="/login" onClick={handleLogout}>
                {/* <i class="ri-user-line"></i> */}
                Logout
              </Link>
            </span>
            </>
            ):(
              <>
            <span className="user">
              {/* <button onClick={()=>loginWithRedirect()}>Login</button> */}
              <Link to="/login">
                {/* <i class="ri-user-line"></i> */}
                LogIn
              </Link>
            </span>
            <span className="user">
              {/* <button onClick={()=>loginWithRedirect()}>Login</button> */}
              <Link to="/register">
                {/* <i class="ri-user-line"></i> */}
                SignUp
              </Link>
            </span>
            </>
            )}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
