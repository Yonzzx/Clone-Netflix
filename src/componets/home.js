import React from "react";
import Originals from "./pages/Originals";
import Recomends from "./pages/Recomends";
import Header from "./header";
import Footer from "./footer";
import Alta from "./pages/Alta";

function Home(){
return(
<div className="container">
<Header/>
<Originals/>
<Recomends/>
<Alta/>
<Footer/>
</div>
);
}

export default Home;