import React from 'react'
import { NavLink } from 'react-router-dom';
import mainLogo from '../../assets/main-logo.webp'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {

  // Array for the Navigation Items
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Array for the Footer Sections
  const footerSections = [
    {
      heading: "Resources",
      links: [
        { name: "Reach Out", link: "/contact" },
        { name: "All Services", link: "/all-services" },
      ],
    },
    {
      heading: "Follow us",
      links: [
        { name: "Instagram", link: "https://www.instagram.com/the_community_of_game_changers?igsh=dGw3YmVuc2syNzYw" },
        { name: "Linkedin", link: "https://www.linkedin.com/company/businessdrivers/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms & Conditions", link: "terms-and-conditions" },
      ],
    },
  ];

  // Array for Social Media Icons
  const socialIcons = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/businessdrivers/",
      label: "Linkedin Profile",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/the_community_of_game_changers?igsh=dGw3YmVuc2syNzYw",
      label: "Instagram",
    },
   
  ];


  return (
    <footer className="bg-white border-t-2 border-skyBlue mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img
                src={mainLogo}
                className="h-20"
                alt="Logo"
              />
              <span className="self-center text-2xl text-skyBlue font-extrabold whitespace-nowrap">
                BUSINESS <span className='text-orange'>DRIVERS</span>
              </span>
            </NavLink>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-md font-extrabold text-orange uppercase">
                  {section.heading}
                </h2>
                <ul className="text-skyBlue font-medium">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-4">
                      <NavLink to={link.link} className="hover:underline">
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between mt-6">

          <div className="flex sm:justify-end justify-start space-x-6 sm:mt-0">
            {socialIcons.map((social, index) => (
              <NavLink
                key={index}
                to={social.link}
                className="ml-0 md:ml-4 text-skyBlue font-extrabold text-2xl"
                aria-label={social.label}
              >
                {social.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer