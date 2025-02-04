import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import NavBar from '../../components/NavBar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Helmet } from 'react-helmet';



const Login = () => {

  const { signInUser, signINWithGoogle } = useAuth();
  const [password, showPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = e => {
    e.preventDefault();

     const form = e.target
    const email = form.email.value
    const password = form.password.value


    signInUser(email, password)
      .then(res => {
        toast.success('SuccessFully Login')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)

      })
      .catch(err => {
        toast.error("Email Or Pin Is Incorrect")

      });
  };


  const handleLoginWithGoogle = () => {
    signINWithGoogle()
      .then(res => {
        toast.success('SuccessFully Login')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
        
      })
      .catch(err => {
        toast.error('Please SignUP With Valid Information');
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <div className="mt-12 flex justify-center items-center ">
        
        <div>
          <Toaster />
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
          <h2 className="text-3xl font-bold text-center">Login your account</h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input bg-[#F3F3F3] rounded-none"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type={password ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input bg-[#F3F3F3] rounded-none"
                required
              />
              <div
                onClick={() => showPassword(!password)}
                className="absolute right-4 top-[51px] cursor-pointer"
              >
                {password ? <FaEyeSlash /> : <FaEye />}
              </div>
  
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
  
            <div className="form-control ">
              <button className="btn bg-blue-500 rounded-none text-white">Login</button>
            </div>
          </form>
          <p className="text-center">
            Dont’t Have An Account ?{' '}
            <Link className="text-blue-500  font-bold" to="/volunteer/register">
              Register
            </Link>
          </p>
  
          <div className="my-5 flex justify-center">
            <button
              onClick={handleLoginWithGoogle}
              className="py-4 px-20 border-2  flex items-center justify-center rounded-lg gap-2"
            >
              <FcGoogle className="text-2xl" /> LogIn With Google
            </button>
          </div>
        </div>
      </div>
   </div>
  
  );
};

export default Login;