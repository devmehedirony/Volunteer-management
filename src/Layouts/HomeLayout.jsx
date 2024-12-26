import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";


const HomeLayout = () => {


  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header>
        <NavBar/>
      </header>
      <main>
        <Hero/>
        <Outlet/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default HomeLayout;