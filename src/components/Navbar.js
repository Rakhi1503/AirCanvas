import React, { useState } from "react";
import { NavData } from "../data/NavData";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // active navLinks 
  const activeLink = "border text-red-500 px-4 py-1";
  const normalLink = " ";
  return (
    <React.Fragment>
      <section>
        <div className=" w-full h-20 flex justify-between align-center text-white text-xl px-10 md:px-0">
          {/* logo section */}
          <div className="centered">
            <p>Air
              <span className="text-red-500 font-bold">Canvas</span></p>
            
          </div>
          
          {/* large screen */}
          <div className="hidden md:flex">
            <div className="flex space-x-10 centered">
              {NavData.map((item, index) => {
                return (
                  <div key={index}>
                    <NavLink to={item.path} 
                               className={({ isActive }) =>
                               isActive ? activeLink : normalLink
                             }
                        >
                        <span>{item.title}</span>
                        </NavLink>
                  </div>
                );
              })}
            </div>
          </div>

          {/* mobile screen */}
          <section className='md:hidden'>
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
    </React.Fragment>
  );
};

export default Navbar;