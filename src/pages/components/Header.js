import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navbar } from "../../data/data";
import { useAuth } from "../../context/auth"; // Assuming useAuth is from auth context
import LogOut from "../../buttons/LogOut"; // Use the correct component name
import EicherLogo from '../../images/Eicher-logo.png';
import MahindraLogo from '../../images/Mahindra-Logo-2000.png';
import SwarajMazdaLogo from '../../images/Swaraj-Mazda-Logo.png';
import BharatBenzLogo from '../../images/BharatBenz-Logo.png';

export default function Header() {
  const [links] = useState(navbar);
  const [isOpen, setIsOpen] = useState(false);
  // const { logout } = useAuth(); // Logout function from auth context
  const location = useLocation(); // Get current location/path

  const handleClick = () => {
    setIsOpen(true);
    const navbar = document.querySelector(".navbar");
    const listItems = document.querySelectorAll(".list-item");

    navbar.classList.toggle("open");
    setIsOpen(!isOpen);

    listItems.forEach((item) => {
      item.addEventListener("click", () => navbar.classList.remove("open"));
      setIsOpen(false);
    });
  };

  // const handleLogout = () => {
  //   logout(); // Call logout function
  //   navigate("/login"); // Redirect to login page
  // };
  const isLoginPage = location.pathname === "/login";

  return (
    <header className="flex py-12 ml-[300px] space-x-4">
      <img
        src={EicherLogo}
        alt="Logo"
        className="w-13 h-12 object-contain mt-3"
      />
      <img
        src={MahindraLogo}
        alt="Logo"
        className="w-13 h-12 object-contain mt-4"
      />
      <div>
        <h2 className="font-bold ml-36 text-4xl text-gray-800">
          Priyansh Automobiles
        </h2>
        <p>
          Plot No.43, Sy No. 355, Near Brundavan Hotel, Beside ORR, Pedda AmberPet, Hayathnagar,
          R.R.Dist
        </p>
      </div>

      <div className="flex flex-col place-items-start space-y-1 mt-2">
        <h1 className="text-xl font-bold text-gray-800">G. shekar</h1>
        <h1 className="text-lg text-gray-800">Ph: 9032698728, 9640600112</h1>
        <h1 className="text-lg text-gray-800">GSTIN: 36BXKPG2180H1ZH</h1>
      </div>
      <img
        src={SwarajMazdaLogo}
        alt="Logo"
        className="w-13 h-12 object-contain mt-5"
      />
      <img
        src={BharatBenzLogo}
        alt="Logo"
        className="w-13 h-12 object-contain mt-5"
      />

      {/* Logout Button */}
      {!isLoginPage && <LogOut />}
      {/* <nav className="navbar">
          <ul>
            {links.map(({ id, title, url }) => (
              <React.Fragment key={id}>
                <li key={id} className="list-item">
                  <Link to={url} className="text-base text-slate-700">
                    {title}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav> */}

      {/* <div className="lg:hidden">
          <button
            onClick={handleClick}
            className="text-sm uppercase transition-all duration-500 text-slate-700"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div> */}
    </header>
  );
}
