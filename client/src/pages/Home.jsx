import { useEffect, useState } from "react";
import API from "../services/api";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";

function Home() {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  const getBlogs = async () => {
    try {

      setLoading(true);

      const res = await API.get("/");

      setBlogs(res.data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(()=>{

    getBlogs();

  },[]);


  if(loading){
    return <Loader/>
  }

  return(

    <div style={{padding:"20px"}}>

      <h1>All Blogs</h1>

      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding:"10px",
          width:"300px",
          marginBottom:"20px"
        }}
      />

      <select
        value={sortOrder}
        onChange={(e)=>setSortOrder(e.target.value)}
        style={{
          marginLeft:"10px",
          padding:"10px"
        }}
      >
        <option value="latest">
          Latest
        </option>

        <option value="oldest">
          Oldest
        </option>

      </select>

      <br/><br/>

      {
        blogs
        .filter((blog)=>
          blog.title
          .toLowerCase()
          .includes(search.toLowerCase())
        )

        .sort((a,b)=>

          sortOrder==="latest"

          ? new Date(b.createdAt)-new Date(a.createdAt)

          : new Date(a.createdAt)-new Date(b.createdAt)

        )

        .map((blog)=>(

          <BlogCard
            key={blog._id}
            blog={blog}
            getBlogs={getBlogs}
          />

        ))
      }

    </div>

  )
}

export default Home;