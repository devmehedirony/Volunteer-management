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
      <main>
        {
          allVolunteerPosts.map(post=> <VolunteerCard key={post._id} post={post}></VolunteerCard>)
        }
      </main>
    </div>
  );
};

export default AllVolunteerPosts;