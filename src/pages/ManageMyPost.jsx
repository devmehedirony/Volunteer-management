import  { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
import { MdDeleteSweep, MdOutlineEdit } from 'react-icons/md';


const ManageMyPost = () => {
  const { user } = useAuth()
  const [myPosts, setPosts] = useState([])
  const [requested, setRequseted] = useState([])
  
  

  useEffect(() => {
    axios.get(`http://localhost:5000/need-volunteer-posts?email=${user.email}`)
      .then(res => setPosts(res.data))
    
    axios.get(`http://localhost:5000/be-a-volunteer?email=${user.email}`)
    .then(res=> setRequseted(res.data))
  }, [user.email])
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <div>
          <h2 className='text-3xl font-bold bg-blue-500 text-white px-10 py-2 w-6/12 mx-auto text-center  mt-6 mb-10 '>My Volunteer Needed Post</h2>
          <div className="overflow-x-auto w-6/12 mx-auto">
            <table className="table">
              
             
              <tbody>
                {/* row 1 */}
                {
                  myPosts.map(post => <tr key={post._id}>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={post.thumbnail}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{post.PostTitle}</div>
                          <div className="text-sm opacity-50">{post.Location}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>volunteersNeeded: <span className='font-bold text-blue-500'>{post.volunteersNeeded}</span></p>
                    </td>
                    <td className='flex flex-col items-center '>
                      {post.Category}
                      
                      <span className="badge badge-ghost badge-sm">{post.deadline}</span>
                    </td>
                   
                    
                    <th>
                      <button className='text-3xl mr-4'><MdOutlineEdit /></button>
                      <button className="btn btn-ghost text-3xl"><MdDeleteSweep /></button>
                    </th>
                  </tr>)
                }
                
              </tbody>
             
            </table>
          </div>
        </div>

        <div className='mt-32'>
          <h2 className='text-3xl font-bold bg-blue-500 text-white px-10 py-2 w-6/12 mx-auto text-center  mt-6 mb-10 '>My Volunteer Request Post</h2>
          <div className="overflow-x-auto w-6/12 mx-auto">
            <table className="table">


              <tbody>
                {/* row 1 */}
                {
                  requested.map(requestVol => <tr key={requestVol._id}>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={requestVol.thumbnail}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{requestVol.PostTitle}</div>
                          <div className="text-sm opacity-50">{requestVol.Location}</div>
                        </div>
                      </div>
                    </td>
                   
                    <td className='flex flex-col items-center '>
                      {requestVol.Category}

                      <span className="badge badge-ghost badge-sm">{requestVol.deadline}</span>
                    </td>


                    <th>
                      <button className='text-3xl mr-4'><MdOutlineEdit /></button>
                      <button className="btn btn-ghost text-3xl"><MdDeleteSweep /></button>
                    </th>
                  </tr>)
                }

              </tbody>

            </table>
          </div>
        </div>

      </main>
      <footer></footer>
    </div>
  );
};

export default ManageMyPost;