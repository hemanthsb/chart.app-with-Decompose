import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
    const Onc=()=>{
        console.log(props,"sssss");
    }
    console.log(props,"sssss");
    return (
        <div>
            <h3>Home Page </h3>
            <br/>
            <Link to='/Task'>
            <button>Go to chart</button>
            </Link>
        </div>
    );  
}
export default Home;
