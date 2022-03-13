import React from "react";
import Popular from "./popular";
import TopRated from "./topRated";
import Header from "./header";
import Footer from "./footer";
function Home(){
return(
<div className="container">
<Header/>
<Popular/>
<TopRated/>
<Footer/>
</div>
);
}

export default Home;