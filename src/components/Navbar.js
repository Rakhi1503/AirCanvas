import React, { useState } from "react";
import { NavData } from "../data/NavData";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showUserManualModal, setShowUserManualModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleUserManualModal = () => {
    setShowUserManualModal(!showUserManualModal);
  };

  const handleAboutModal = () => {
    setShowAboutModal(!showAboutModal);
  };

  const handleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  const activeLink = "border text-red-500 px-4 py-1";
  const normalLink = " ";

  return (
    <React.Fragment>
      <section>
        <div className="w-full h-20 flex justify-between align-center text-white text-xl px-10 md:px-0">
          <div className="centered">
            <p>
              Air
              <span className="text-red-500 font-bold">Canvas</span>
            </p>
          </div>
          
          <div className="hidden md:flex">
            <div className="flex space-x-10 centered">
              {NavData.map((item, index) => (
                <div key={index}>
                  <NavLink 
                    to={item.path}
                    activeClassName={activeLink}
                    className={normalLink}
                    onClick={() => {
                      if (item.title === "User Manual") {
                        handleUserManualModal();
                      } else if (item.title === "About") {
                        handleAboutModal();
                      } else if (item.title === "Contact") {
                        handleContactModal();
                      }
                    }}
                  >
                    <span>{item.title}</span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>

          <section className="md:hidden">
            <div className="centered h-20">
              <div className="text-2xl">
                {toggle === false ? (
                  <FaBars onClick={handleToggle} />
                ) : (
                  <FaTimes onClick={handleToggle} />
                )}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Modals */}
      {/* User Manual Modal */}
      {showUserManualModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">User Manual</h2>
            <p>This is the User Manual modal.</p>
            <button className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md" onClick={handleUserManualModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* About Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p>This is the About modal.</p>
            <button className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md" onClick={handleAboutModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>Diya Dominic.</p>
            <p>Gowri J.</p>
            <p>Rakhi R Panicker.</p>
            <p>Sailakshmi Anilkumar.</p>
            <button className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md" onClick={handleContactModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
