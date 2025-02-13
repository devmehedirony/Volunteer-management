import { FaUsers, FaHandHoldingHeart, FaLightbulb } from "react-icons/fa6";
import NavBar from "./NavBar";

const About = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <section className="py-12 px-4 text-center  my-20 flex justify-center flex-col min-h-[calc(100vh-300px)]">
        <h2 className="text-3xl font-bold mb-6">
          About <span className="text-blue-600">Our Volunteer Management</span>
        </h2>
        <p className="text-gray-600 max-w-5xl mx-auto mb-8">
          Our Volunteer Management System is designed to streamline the process of recruiting, organizing,
          and supporting volunteers. By leveraging technology, we make it easier for organizations to manage
          volunteer participation, track engagement, and enhance collaboration. Our mission is to empower
          communities by connecting passionate individuals with meaningful opportunities, fostering a culture
          of giving and positive impact.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaUsers className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Community Driven</h3>
            <p className="text-sm text-gray-500">
              Connecting passionate individuals with meaningful opportunities.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaHandHoldingHeart className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Supportive Network</h3>
            <p className="text-sm text-gray-500">
              Providing the tools and resources needed for volunteers to succeed.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center">
            <FaLightbulb className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Innovative Solutions</h3>
            <p className="text-sm text-gray-500">
              Using technology to enhance the volunteer experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;