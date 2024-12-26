import NavBar from "../components/NavBar";
import VolunteerCard from "../components/VolunteerCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const AllVolunteerPosts = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(`https://volunteer-management-server-sage.vercel.app/need-volunteer-posts?search=${search}`)
      .then(res => setData(res.data))
  }, [search])

  return (
    <div>
      <Helmet>
        <title>Need VolunteerPost</title>
      </Helmet>
      <header>
        <NavBar />
      </header>
      <section className="flex justify-center gap-2 md:my-4 mt-10 px-4">
        <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered rounded-none w-full max-w-xs" /> <button className="btn rounded-none bg-blue-500 text-white ">Search</button>
      </section>
      <main className="grid md:grid-cols-3 grid-cols-1 gap-10 md:w-9/12 w-11/12 mx-auto my-10">
        {
          data.map(post => <VolunteerCard key={post._id} post={post}></VolunteerCard>)
        }
      </main>
    </div>
  );
};

export default AllVolunteerPosts;