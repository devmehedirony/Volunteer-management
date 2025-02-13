import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";


const NavBar = () => {
  const { user, signOutUser } = useAuth()
  const navigate = useNavigate()
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  
  const handleToogle = e => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])

  const signOut = () => {
    signOutUser()
      .then(res => {
        toast.success('Login Out SuccessFull')
        navigate('/volunteer/login')
      })
      .catch(err => {
      toast.error('signOut Unsucessfull')
    })
  }

  const links = (
    <>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
              ? 'bg-white  text-[#3B82F6] px-4 py-2 rounded-md text-base  font-medium'
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
              ? 'bg-white  text-[#3B82F6] px-4 py-2 rounded-md text-base   font-medium'
              : 'text-base'
              }
          to="/all-volunteer-need-posts"
            >
          All volunteer Need posts
            </NavLink>
      </li>
      
      {
        user ? <>
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-white  text-[#3B82F6] px-4 py-2 rounded-md text-base   font-medium'
                  : 'text-base'
              }
              to='/add-volunteer-need-posts'
            >
              Add Volunteer need Post
            </NavLink>
          </li>

          
          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-white  text-[#3B82F6] px-4 py-2 rounded-md text-base   font-medium'
                  : 'text-base'
              }
              to='/manage-my-posts'
            >
              My Posts
            </NavLink>
          </li>

          <li className="text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-white  text-[#3B82F6] px-4 py-2 rounded-md text-base   font-medium'
                  : 'text-base'
              }
              to='/my-profile'
            >
              MY Profile
            </NavLink>
          </li>

        </> :
          <li className="text-lg">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'bg-white  text-[#3B82F6] px-4 py-2 rounded-md text-base   font-medium'
                : 'text-base'
            }
            to='/about'
          >
            About
          </NavLink>
        </li>
      }
         
        
 
      
    </>
  );
  return (
    <div className="bg-[#3B82F6] fixed top-0 left-0 z-50 w-full">
      <div className="navbar w-11/12 mx-auto">
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
          <Link to='/' className="text-xl flex item-center gap-2">
            <img className="md:h-10 h-6" src={logo} alt="" />
            <h2 className="text-2xl hidden md:block font-normal text-white">Volunteers</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-8 menu-horizontal text-white px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        
          
          {
            user ?
              <div className="flex items-center gap-4">
                 <div className="tooltip  tooltip-left" data-tip={user.displayName}>
                <div className="dropdown dropdown-hover">
                    <img className='h-10 rounded-full ' src={user?.photoURL} alt="" />
                </div>
                </div>
                
                <div>
                  <button
                    className="  bg-white  text-blue-600  md:px-6 px-2 py-2 text-xs  rounded-xl mr-4 md:text-sm "
                    onClick={signOut}
                  >
                    SignOut
                  </button>
                </div>
              </div>
             

          
              :
              <>
                <Link
                  to="/volunteer/login"
                  className="   px-6 py-2 rounded-xl mr-4 text-sm bg-white  text-[#3B82F6]  "
                >
                  Login
                </Link>
                <Link
                  to="/volunteer/register"
                  className=" px-6 py-2 rounded-xl mr-4 text-sm bg-white  text-[#3B82F6]  "
                >
                  Register
                </Link>
              </>
         }
          <div className="form-control ">
            <label className="label cursor-pointer">
              <input type="checkbox" onChange={handleToogle} className="toggle toggle-primary" defaultChecked />
            </label>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default NavBar;