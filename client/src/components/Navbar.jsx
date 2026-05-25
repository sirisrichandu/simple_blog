import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar(){

const [darkMode,setDarkMode]=useState(true);

useEffect(()=>{

document.body.style.backgroundColor=

darkMode ? "#0b1020" : "#ffffff";

document.body.style.color=

darkMode ? "white" : "black";

},[darkMode]);


return(

<nav style={{
display:"flex",
justifyContent:"space-between",
padding:"20px",
background:"#222"
}}>

<h2>Simple Blog</h2>

<div style={{
display:"flex",
gap:"20px",
alignItems:"center"
}}>

<Link
to="/"
style={{
color:"white",
textDecoration:"none"
}}
>
Home
</Link>

<Link
to="/create"
style={{
color:"white",
textDecoration:"none"
}}
>
Create Blog
</Link>

<button
onClick={()=>
setDarkMode(!darkMode)
}
>

{
darkMode

? "☀️"

: "🌙"
}

</button>

</div>

</nav>

)

}

export default Navbar;