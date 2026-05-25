import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../services/api";

function EditBlog(){

const {id}=useParams();

const navigate=useNavigate();

const [formData,setFormData]=useState({
title:"",
author:"",
content:""
});


useEffect(()=>{

fetchBlog();

},[]);


const fetchBlog=async()=>{

try{

const res=await API.get(`/${id}`);

setFormData(res.data);

}catch(error){

console.log(error);

}

};


const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
});

};


const handleSubmit=async(e)=>{

e.preventDefault();

try{

await API.put(
`/${id}`,
formData
);

toast.success(
"Blog Updated Successfully"
);

navigate("/");

}catch(error){

console.log(error);

}

};


return(

<div style={{
padding:"30px"
}}>

<h1>Edit Blog</h1>

<form onSubmit={handleSubmit}>

<input
type="text"
name="title"
value={formData.title}
onChange={handleChange}
/>

<br/><br/>

<input
type="text"
name="author"
value={formData.author}
onChange={handleChange}
/>

<br/><br/>

<textarea
name="content"
rows="8"
cols="50"
value={formData.content}
onChange={handleChange}
/>

<br/><br/>

<button type="submit">
Update Blog
</button>

</form>

</div>

)

}

export default EditBlog;