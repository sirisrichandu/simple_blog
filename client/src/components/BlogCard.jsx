import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../services/api";

function BlogCard({ blog, getBlogs }) {

const [showFull,setShowFull]=useState(false);
const [favorite,setFavorite]=
useState(false);
const handleDelete = async()=>{

const confirmDelete = window.confirm(
"Are you sure?"
);

if(!confirmDelete) return;

try{

await API.delete(`/${blog._id}`);

toast.success(
"Blog Deleted Successfully"
);

getBlogs();

}catch(error){

console.log(error);

}

};

return(

<div style={{
border:"1px solid gray",
padding:"20px",
borderRadius:"10px",
marginBottom:"20px"
}}>

<h2>{blog.title}</h2>

<p>By: {blog.author}</p>

<p>
{new Date(blog.createdAt)
.toLocaleDateString()}
</p>

<p>
{
showFull
? blog.content
: blog.content.slice(0,100)
}
</p>

<button
onClick={()=>
setShowFull(!showFull)
}
>
{showFull ? "Show Less" : "Read More"}
</button>

<br/><br/>
<button
onClick={()=>
setFavorite(!favorite)
}
>

{
favorite

? "❤️"

: "🤍"
}

</button>

<Link to={`/edit/${blog._id}`}>
<button>Edit</button>
</Link>

<button onClick={handleDelete}>
Delete
</button>

</div>

)

}

export default BlogCard;