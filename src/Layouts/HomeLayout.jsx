import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const HomeLayout = () => {


  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
};

export default HomeLayout;