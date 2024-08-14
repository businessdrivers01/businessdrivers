import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '../../utils';
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import mainLogo from '../../assets/main-logo.webp'
function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    let hideTimeout;

    const showDropdown = () => {
        clearTimeout(hideTimeout);
        setDropdownVisible(true);
    };

    const hideDropdown = () => {
        hideTimeout = setTimeout(() => {
            setDropdownVisible(false);
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
                        <img
                            className='w-full scale-150'
                            src={mainLogo} alt="" />
                    </NavLink>

                </div>

                {/* Navigation links */}
                <ul className={`
  lg:flex transition-transform duration-1000 ease-in-out items-center 
  ${menuVisible ?
                        'py-6 pl-32 md:px-0 md:py-0 flex-col lg:flex-row absolute top-28 left-0 right-0 bg-[#ffffff] lg:bg-transparent lg:relative lg:top-0 transition-transform duration-1000 ease-in-out' +
                        (menuVisible ? ' translate-y-0' : ' -translate-y-full') :
                        'hidden'
                    }
`}>
                    <li className='my-2 md:my-0 duration-500 md:hover:scale-125 '>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (`  
                                ${isActive ? 'text-orange' : 'text-[#60c0e2]'} md:mx-4 mx-[5px] text-[0.8rem] md:text-[16px] font-semibold cursor-pointer hover:text-orange`
                            )}
                        >
                            HOME
                        </NavLink>
                    </li>

                    <li className='my-2 md:my-0 duration-500 md:hover:scale-125'>
                        <NavLink to="/about" className={({ isActive }) => (`${isActive ? 'text-orange' : 'text-[#60c0e2]'} md:mx-4 mx-[5px] text-[0.8rem] md:text-[16px] font-semibold cursor-pointer   hover:text-orange`
                        )}>ABOUT US</NavLink>
                    </li>

                    <li className='my-2 md:my-0 relative dropdown-parent duration-500 md:hover:scale-110'
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}>
                        <NavLink to="/all-services" className={({ isActive }) => `flex items-center ${isActive ? 'text-orange' : 'text-[#60c0e2]'} md:mx-4 mx-[5px] text-[0.8rem] md:text-[16px] font-semibold cursor-pointer hover:text-orange`}>
                            DIGITAL MARKETING SERVICES <RiArrowDropDownLine className='hidden md:block' size={"1.5rem"} />
                        </NavLink>
                        {dropdownVisible && (
                            <ul className={`border-[2px] border-orange py-2 absolute left-0 top-full bg-[#ffffff] text-orange shadow-lg mt-2 rounded-md overflow-hidden transform transition-transform duration-300 ease-in-out ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
                                }`}
                                onMouseEnter={cancelHideDropdown}
                                onMouseLeave={hideDropdown}>
                                <li className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                    <NavLink to="/seo">SEO</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                    <NavLink to="/social-media-marketing">SOCIAL MEDIA MARKETING</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                    <NavLink to="/ppc">PPC (PAY PER CLICK)</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                    <NavLink to="/web-dev">WEBSITE DESIGN AND DEVELOPMENT</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                    <NavLink to="/content-writing">CONTENT WRITING SERVICES</NavLink>
                                </li>
                                <li className="px-4 py-2 hover:text-orange my-4 font-semibold duration-500">
                                    <NavLink to="/creatives-branding">CREATIVES AND BRANDING</NavLink>
                                </li>
                            </ul>
                        )}
                    </li>


                    <li className='my-2 md:my-0 duration-500 md:hover:scale-125'>
                        <NavLink to="/contact" className={({ isActive }) => (`${isActive ? 'text-orange' : 'text-[#60c0e2]'} md:mx-4 mx-[5px] text-[0.8rem] md:text-[16px] font-semibold cursor-pointer   hover:text-orange`
                        )}>CONTACT</NavLink>
                    </li>
                </ul>

                <div className="btn-container">
                    <NavLink to="/contact">
                        <Button
                            children={"Get A Quote"}
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

export default Header