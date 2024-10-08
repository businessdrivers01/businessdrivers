import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '../../utils';
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import mainLogo from '../../assets/main-logo.webp'

// Define navigation items and dropdown items as arrays
const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT US" },
    { to: "/all-services", label: "SERVICES", isDropdown: true, dropdownItems: [
        { to: "/seo", label: "SEO" },
        { to: "/social-media-marketing", label: "SOCIAL MEDIA MARKETING" },
        { to: "/ppc", label: "PPC (PAY PER CLICK)" },
        { to: "/web-dev", label: "WEBSITE DESIGN AND DEVELOPMENT" },
        { to: "/content-writing", label: "CONTENT WRITING SERVICES" },
        { to: "/creatives-branding", label: "CREATIVES AND BRANDING" }
    ]},
    { to: "/all-services", label: "SPECIAL SERVICES", isDropdown: true, dropdownItems: [
        { to: "special-services", label: "Strategic Marketing Consulting" },
        { to: "special-services", label: "Growth Hacking" },
        { to: "special-services", label: "Market Analysis and Research" },
        { to: "special-services", label: "Sales Enablement" }
    ]},
    { to: "/free-courses", label: "FREE COURSES" }
];

function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    let hideTimeout;

    const showDropdown = (label) => {
        clearTimeout(hideTimeout);
        setActiveDropdown(label);
    };

    const hideDropdown = () => {
        hideTimeout = setTimeout(() => {
            setActiveDropdown(null);
        }, 300); // Adjust the delay as needed
    };

    const cancelHideDropdown = () => {
        clearTimeout(hideTimeout);
    };

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className='bg-orange'>
            <nav className={`flex items-center justify-between lg:justify-between bg-white shadow-lg py-6 md:py-0 px-4 md:px-12 w-[100vw]`}>
                <div className="logo w-[18vw] md:w-[8vw] p-0 m-0">
                    <NavLink to="/">
                        <img className='w-full scale-150' src={mainLogo} alt="" />
                    </NavLink>
                </div>

                {/* Navigation links */}
                <ul className={`
                    lg:flex transition-transform duration-1000 ease-in-out items-center 
                    ${menuVisible ?
                        'z-[100] py-6 pl-32 md:px-0 md:py-0 flex-col lg:flex-row absolute top-28 left-0 right-0 bg-[#ffffff] lg:bg-transparent lg:relative lg:top-0 transition-transform duration-1000 ease-in-out' +
                        (menuVisible ? ' translate-y-0' : ' -translate-y-full') :
                        'hidden'
                    }
                `}>
                    {navLinks.map((link, index) => (
                        <li key={index} className={`z-[100] my-2 mx-4 md:my-0 duration-500 ${link.isDropdown ? 'relative dropdown-parent duration-500 md:hover:scale-110 flex items-center' : 'md:hover:scale-125 '}`}
                            onMouseEnter={() => link.isDropdown ? showDropdown(link.label) : undefined}
                            onMouseLeave={link.isDropdown ? hideDropdown : undefined}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) => (`  
                                    ${isActive ? 'text-orange' : 'text-[#60c0e2]'} md:mx-4 mx-[5px] text-[0.8rem] md:text-[16px] font-semibold cursor-pointer hover:text-orange`)}
                            >
                                <span className="flex items-center">
                                    {link.label}
                                    {link.isDropdown && <RiArrowDropDownLine className="ml-1 hidden md:inline-block" size={"1.5rem"} />}
                                </span>
                            </NavLink>
                            {link.isDropdown && activeDropdown === link.label && (
                                <ul className={`z-[100] border-[2px] border-orange py-2 absolute left-0 top-full bg-[#ffffff] text-orange shadow-lg mt-2 rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out ${activeDropdown === link.label ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
                                    }`}
                                    onMouseEnter={cancelHideDropdown}
                                    onMouseLeave={hideDropdown}>
                                    {link.dropdownItems.map((item, index) => (
                                        <li key={index} className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                            <NavLink to={item.to}>{item.label}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="btn-container">
                    <NavLink to="/contact">
                        <Button
                            children={"CONTACT US"}
                            className='hidden md:block text-white px-6 font-bold bg-[#60c0e2]
                            hover:bg-[#ffffff] hover:text-skyBlue border-[1.5px] border-[#60c0e2] duration-500'
                        />
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[#60c0e2]">
                        {menuVisible ? (
                            <GiCancel size={"1.89em"} className="transition-transform duration-300 ease-in-out " />
                        ) : (
                            <GiHamburgerMenu size={"1.8rem"} className="rotate-180" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
