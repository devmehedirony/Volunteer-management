import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import OurVolunteers from "../components/OurVolunteers";


const HomeLayout = () => {


  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header>
        <NavBar/>
      </header>
      <main className="mt-16">
        <Hero/>
        <Outlet />
        <OurVolunteers></OurVolunteers>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default HomeLayout;