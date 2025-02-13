import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>
            Volunteering is an important and honorable way to help others. It
            can be a great way to make a difference in the world.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">All Volunteers</h3>
          <ul>
            <li className="mb-2">
              <Link to={'/all-volunteer-need-posts'} className="hover:underline">
                All Volunteer Need Post
              </Link>
              <p className="text-sm text-gray-400">July 5, 2023 / 0 Comments</p>
            </li>
            <li>
              <Link to={'/manage-my-posts'} className="hover:underline">
                Manage Your Posts
              </Link>
              <p className="text-sm text-gray-400">July 5, 2023 / 0 Comments</p>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul>
            <li className="mb-2">
              <Link to={'/my-profile'} className="hover:underline">
                My Profile
              </Link>
            </li>
            <li className="mb-2">
              <Link to={'/add-volunteer-need-posts'} className="hover:underline">
               Need Post
              </Link>
            </li>
           
          </ul>
        </div>

       
     
      </div>

      
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>
        
          <span className="text-gray-300 font-semibold">
            Volunteer - Management
          </span>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
