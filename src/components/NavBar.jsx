import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';


const NavBar = () => {

  const links = (
    <>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 text-base  font-medium'
                  : 'text-base'
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
            isActive
              ? 'text-blue-600 text-base   font-medium'
              : 'text-base'
              }
          to="/all-volunteer-need-posts"
            >
          All volunteer Need posts
            </NavLink>
          </li>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
            isActive
              ? 'text-blue-600 text-base  font-medium'
              : 'text-base'
              }
              to="/my-profile"
            >
              my-profile
            </NavLink>
          </li>
        
 
      
    </>
  );
  return (
    <div>
      <div className="navbar w-11/12 mx-auto my-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="h-10" src={logo} alt="" />
            <h2 className="text-2xl font-normal">Volunteers</h2>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-8 menu-horizontal  px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        
          
         
            <Link
            to="/volunteer/login"
            className=" border border-[#2f3941] px-6 py-2 rounded-xl mr-4 text-sm hover:bg-blue-500 hover:text-white hover:border-white transition-all duration-1000 ease-out "
            >
              Login
            </Link>
            <Link
            to="/volunteer/register"
            className=" border border-[#2f3941] px-6 py-2 rounded-xl mr-4 text-sm hover:bg-blue-500 hover:text-white hover:border-white transition-all duration-1000 ease-out "
            >
              Register
            </Link>
        
        </div>
      </div>
    </div>
  );
};

export default NavBar;