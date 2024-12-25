import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";


const HomeLayout = () => {


  return (
    <div>
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