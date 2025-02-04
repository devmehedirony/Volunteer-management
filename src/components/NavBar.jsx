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
         
        
 
      
    </>
  );
  return (
    <div >
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
          <Link to='/' className="text-xl flex item-center gap-2">
            <img className="md:h-10 h-6" src={logo} alt="" />
            <h2 className="text-2xl hidden md:block font-normal">Volunteers</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-8 menu-horizontal  px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
        
          
          {
            user ? <div className='flex items-center '>
              <div className="tooltip  tooltip-left" data-tip={user.displayName}>
                <div className="dropdown dropdown-hover">
                  <img className='h-10 hidden md:block rounded-full mr-4' src={user.photoURL} alt="" />
                </div>
              </div>
              <div className="mr-8">
                <details className="dropdown">
                  <summary className="btn hover:bg-transparent text-xs md:text-base   bg-transparent py-0 text-blue-500 font-semibold px-0 border-none">My Profile</summary>
                  <ul className="menu dropdown-content  rounded-box z-[1] w-52 p-2 shadow">
                    <li className="bg-blue-500 text-white mb-2"><Link to='/add-volunteer-need-posts'>Add Volunteer need Post</Link></li>
                    <li className="bg-blue-500 text-white"><Link to='/manage-my-posts'>Manage My Posts</Link></li>
                  </ul>
                </details>
              </div>
              <div>
                <button
                  className="  bg-blue-500 border-white text-white  md:px-6 px-2 py-2 text-xs  rounded-xl mr-4 md:text-sm hover:bg-transparent  hover:text-blue-500 hover:border-[#2f3941] transition-all duration-1000 ease-out "
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