import React from "react";
// import home1 from "../img/home1.png";
// import Salgsproces from "./Salgsproces";
import Header from "./Header";
import Dyrhosos from "./Dyrhosos";
import Omos from "./Omos";
import Blivfrivillig from "./Blivfrivillig";
import Dyrinoed from "./Dyrinoed";
import Nyhedsbrev from "./Nyhedsbrev";

const Main = () => {
    return (
        <main className="main">
            <Header/>
            <Omos/>
            <Blivfrivillig/>
            <Dyrinoed/>
            <Nyhedsbrev/>
            <Dyrhosos/>
        </main>
    );
};

export default Main;
