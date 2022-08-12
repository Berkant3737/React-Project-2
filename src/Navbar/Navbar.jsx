import { useState } from "react";
import logo from "./VatanComputer.png";
import "./style.css";
import {
  FaSistrix,
  FaUserCircle,
  FaShoppingCart,
  FaMobile,
  FaLaptop,
  FaCamera,
  FaTv,
  FaPrint,FaGamepad
} from "react-icons/fa";
import { AiOutlineMenu,AiOutlineClear } from "react-icons/ai";

function Navbar({number},{setNumber}) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="navbar-brand-logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AiOutlineMenu
                      style={{
                        width: 30,
                        height: 20,
                      }}
                    />{" "}
                    Kategoriler
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaMobile />
                        </div>{" "}
                        Telefon
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaLaptop />
                        </div>{" "}
                        Bilgisayar
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaLaptop />
                        </div>{" "}
                        Bilgisayar Parçaları
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaCamera />
                        </div>{" "}
                        Fotoğraf & Kamera
                      </a>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaTv />
                        </div>{" "}
                        TV & Ev Elektroniği
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaPrint />
                        </div>{" "}
                        Ofis Malzemeleri
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaPrint/>
                        </div>{" "}
                        Aksesuarlar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <FaGamepad/>
                        </div>{" "}
                        Oyun & Hobi
                      </a>
                    </li>
              
                    <li>
                      <a className="dropdown-item" href="#">
                        <div className="icon d-inline-block">
                          <AiOutlineClear/>
                        </div>{" "}
                      Ev Aletleri & Kişisel Bakım
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <input
                className="form-control search me-2"
                type="search"
                placeholder="Ürün Ara"
                aria-label="Search"
              />
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Üyelik{" "}
                  <FaUserCircle
                    style={{
                      width: 40,
                      height: 25,
                    }}
                  />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  
                  Sepetim{" "}
                  <FaShoppingCart
                    style={{
                      width: 40,
                      height: 20,
                    }}
                  />{number}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
