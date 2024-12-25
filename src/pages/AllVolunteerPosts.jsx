import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";
import VolunteerCard from "../components/VolunteerCard";


const AllVolunteerPosts = () => {
  const allVolunteerPosts = useLoaderData()
  console.log(allVolunteerPosts);
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main className="grid grid-cols-3 gap-10 w-9/12 mx-auto my-10">
        {
          allVolunteerPosts.map(post=> <VolunteerCard key={post._id} post={post}></VolunteerCard>)
        }
      </main>
    </div>
  );
};

export default AllVolunteerPosts;