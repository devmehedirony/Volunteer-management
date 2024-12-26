import axios from "axios";
import { useEffect, useState } from "react";
import AscendingOrder from "../components/AscendingOrder";
import Contact from "../components/Contract";
import Featured from "../components/Featured";


const Home = () => {
  const [ascending,setAscending] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/need-volunteer-posts?sort=ascending')
    .then(res=> setAscending(res.data))
  },[])
  return (
    <div className="my-20">
      <h2 className="text-center font-semibold text-4xl uppercase  mt-6 mb-8">upcoming deadlines</h2>
      <div className="grid grid-cols-3 gap-10 w-9/12 mx-auto mb-20">
        {
          ascending.map(card=> <AscendingOrder key={card._id} card={card}></AscendingOrder>)
        }
      </div>

      <section>
        <Contact/>
      </section>
      <section>
        <Featured/>
      </section>
    </div>
  );
};

export default Home;