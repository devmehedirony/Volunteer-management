import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import { MdCategory, MdManageAccounts, MdMarkEmailRead } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiNamebase } from "react-icons/si";


const NeedVolunteerDetails = () => {
  const volunteerPostDetails = useLoaderData()
  const { _id, thumbnail, PostTitle, description, Category, Location, OrganizerName, organizerEmail, volunteersNeeded, deadline } = volunteerPostDetails
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={thumbnail}
              className="w-[600px] object-cover h-[500px] rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{PostTitle}</h1>
              <h2 className='bg-[#553739] text-white rounded-2xl py-2 px-2 font-bold mt-4'>DeadLine: {deadline}</h2>
              <p className="pt-3 font-medium text-sm">
                {description}
              </p>
              <div className='my-4'>
                          <span className='flex items-center gap-2'><MdCategory /> Category: <span className='font-bold text-blue-500'>{Category}</span></span>
                          <span className='flex items-center gap-2'><MdManageAccounts /> volunteersNeeded: <span className='font-bold text-blue-500'>{volunteersNeeded}</span></span>
                <span className='flex items-center gap-2'><FaMapLocationDot /> Location: <span className='font-bold text-blue-500'>{Location}</span></span>
                <span className='flex items-center gap-2 font-bold mt-2 bg-blue-500 text-white py-1 px-2'><SiNamebase /> OrganizerName: <span className='font-bold uppercase'>{OrganizerName}</span></span>
                <span className='flex items-center gap-2 font-bold mt-2 bg-gray-400 text-white py-1 px-2'><MdMarkEmailRead /> OrganizerEmail: <span className='font-bold'>{organizerEmail}</span></span>
              </div>
              <div className=" flex justify-center pt-4">
                <Link to='be-volunteer'><button className="border-2  py-2 px-6 font-bold">Be a Volunteer</button></Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NeedVolunteerDetails;