import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import volunteer1 from '../assets/pic1.jpg'
import volunteer2 from '../assets/pic2.jpg'
import volunteer3 from '../assets/pic3.jpg'
import volunteer4 from '../assets/pic4.jpg'

const OurVolunteers = () => {
  return (
    <div className="my-20">
      <section className="py-12 w-9/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Our group of <span className="text-blue-600">volunteers</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <img
              src={volunteer1}
              alt="Jonathan Doe"
              className="w-24 h-24 rounded-full mb-4 border-4 object-cover object-center border-gray-200"
            />
            <h3 className="text-lg font-semibold">Jonathan Doe</h3>
            <p className="text-sm text-gray-500">+49 123 456 789</p>
            <p className="text-sm text-gray-500 mb-4">johndoe@email.com</p>
            <div className="flex gap-3 text-gray-600 text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaGoogle className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <img
              src={volunteer2}
              alt="George Bell"
              className="w-24 h-24 rounded-full mb-4 border-4 object-cover object-center border-gray-200"
            />
            <h3 className="text-lg font-semibold">George Bell</h3>
            <p className="text-sm text-gray-500">+49 123 456 789</p>
            <p className="text-sm text-gray-500 mb-4">johndoe@email.com</p>
            <div className="flex gap-3 text-gray-600 text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaGoogle className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <img
              src={volunteer3}
              alt="Laura Fenty"
              className="w-24 h-24 object-cover object-center rounded-full mb-4 border-4 border-gray-200"
            />
            <h3 className="text-lg font-semibold">Laura Fenty</h3>
            <p className="text-sm text-gray-500">+49 123 456 789</p>
            <p className="text-sm text-gray-500 mb-4">johndoe@email.com</p>
            <div className="flex gap-3 text-gray-600 text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaGoogle className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <img
              src={volunteer4}
              alt="Cameron Poll"
              className="w-24 object-cover object-center h-24 rounded-full mb-4 border-4 border-gray-200"
            />
            <h3 className="text-lg font-semibold">Cameron Poll</h3>
            <p className="text-sm text-gray-500">+49 123 456 789</p>
            <p className="text-sm text-gray-500 mb-4">johndoe@email.com</p>
            <div className="flex gap-3 text-gray-600 text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaGoogle className="hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVolunteers;
