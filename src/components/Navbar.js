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
            <p><b>AIR CANVAS</b></p>
            <p>Use the pointed finger to draw. </p>
            <p>To change colours or to clear or save,close the fist and use the pointed finger once the area is reached on screen</p>
            <p>For saving,select the path where the png has to be saved from the prompt.</p>
            <p><b>SLIDE NAVIGATION</b></p>
            <p>From the prompt select the path of the desired pptx file.</p>
            <p>Once the file opens, Use right open palm to move forward.</p>
            <p>Left open palm navigates the slide backwards and victory sign exits the presentation.</p>
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
            <p>In the context of
online education, the conventional use of online whiteboards necessitates constant tab-switching,
leading to a disruptive teaching experience. Educators often struggle to transition between teaching
content and the whiteboard interface. To enhance the online teaching experience,  "Air Canvas" integrates the whiteboard functionality directly into the virtual classroom environment. Using "Air Canvas" , educators can effortlessly switch between teaching materials and
a virtual whiteboard without the need to navigate to a separate tab. This technology allows
instructors to illustrate concepts, annotate content, and interact dynamically with the class, all
within the same interface.  This technology will also enable users to
easily switch slides using their hand movements. </p>
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
