import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthProvider";
import NavBar from "../components/NavBar";


const MyProfile = () => {
  const { user } = useContext(authContext)
  
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div className="bg-black py-24 mt-16">
        <h2 className="text-white text-4xl  text-center ">My Profile</h2>
      </div>

      <div className="flex justify-center items-center flex-col gap-2 my-20">
        <img src={user?.photoURL} alt="" />
        <h2 className="text-2xl"> {user?.displayName}</h2>
        <h2><span className="text-blue-600 font-bold text-xl">{user?.email}</span></h2>
      </div>
    </div>
  );
};

export default MyProfile;