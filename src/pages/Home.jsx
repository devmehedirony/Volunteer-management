import axios from "axios";
import { useEffect, useState } from "react";
import AscendingOrder from "../components/AscendingOrder";
import Contact from "../components/Contract";
import Featured from "../components/Featured";


const Home = () => {
  const [ascending, setAscending] = useState([])
  useEffect(() => {
    axios.get('https://volunteer-management-server-liart.vercel.app/need-volunteer-posts?sort=ascending')
      .then(res => setAscending(res.data))
  }, [])
  return (
    <div className="my-20">
      <h2 className="text-center font-semibold md:text-4xl text-lg uppercase  mt-6 mb-8">upcoming deadlines</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:w-9/12 w-11/12 mx-auto mb-20">
        {
          ascending.map(card => <AscendingOrder key={card._id} card={card}></AscendingOrder>)
        }
      </div>

      <section>
        <Contact />
      </section>
      <section>
        <Featured />
      </section>
    </div>
  );
};

export default Home;