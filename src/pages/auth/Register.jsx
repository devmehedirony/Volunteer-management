

import {  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import NavBar from '../../components/NavBar';
import { Helmet } from 'react-helmet';


const Register = () => {
  const navigate = useNavigate();
  const location = useLocation()


  const { createUser, updateUserProfile, signINWithGoogle } = useAuth()
  const [password, showPassword] = useState(false);

  const handleRegister = e => {
    e.preventDefault();

    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    if (name.length < 5) {
      return toast.error('Please Enter 6 Character Name');
    }



    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {

      toast.error('Password Must have an Uppercase, Lowercase , Length  at least 6 character');
      return;
    }

    createUser(email, password)
      .then(res => {
        toast.success('Account Create SuccessFull')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
        updateUserProfile({ displayName: name, photoURL: photo });
      })
      .catch(err => {
        toast.error('Please Enter Valid Information')
      });


  };

  const handleSignUpWithGoogle = () => {
    signINWithGoogle()
      .then(res => {
        toast.success('Account Create SuccessFull')
        setTimeout(() => {
          navigate(location?.state ? location?.state : '/');
        }, 1000)
      }).catch(err => {
        toast.error('Please SignUP With Valid Information')
      })
  }

  return (
    <div className='mt-32'>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <header>
        <NavBar/>
    </header>
      <div className=" flex justify-center items-center ">
        <div>
          <Toaster />
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
          <h2 className="text-3xl font-bold text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input bg-[#F3F3F3]  rounded-none "
                required
              />
            </div>
  
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo-Url"
                className="input bg-[#F3F3F3] rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
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
                <span className="label-text font-bold">Password</span>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 rounded-none text-white">
                Register
              </button>
            </div>
          </form>
          <p className="text-center">
            AllReady Have An Account ?{' '}
            <Link className="text-blue-500  font-bold" to="/volunteer/login">
              Login
            </Link>
          </p>
  
          <div className="my-5 flex justify-center">
            <button
              onClick={handleSignUpWithGoogle}
              className="py-4 px-10 md:px-20 border-2  flex items-center justify-center rounded-lg gap-2"
            >
              <FcGoogle className="text-2xl" /> Continiue With Google
            </button>
          </div>
        </div>
      </div>
   </div>
  
  );
};

export default Register;