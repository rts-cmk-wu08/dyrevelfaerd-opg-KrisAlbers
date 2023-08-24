import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Dyrhosos from "./Components/Dyrhosos";
import Blivfrivillig from "./Components/Blivfrivillig";
import Dyrinoed from "./Components/Dyrinoed";
import Nyhedsbrev from "./Components/Nyhedsbrev";
import Omos from "./Components/Omos";

// import About from "./Templates/About";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Dyrhosos" element={<Dyrhosos />} />
            <Route path="/Omos" element={<Omos />} />
            <Route path="/Blivfrivillig" element={<Blivfrivillig />} />
            <Route path="/Dyrinoed" element={<Dyrinoed />} />
            <Route path="/Nyhedsbrev" element={<Nyhedsbrev />} />
            <Route path="/Dyrhosos" element={<Dyrhosos />} />
            

            {/* <Route index element={<Home/>} /> */}
            {/* <Route path="about" element={<About/>} /> */}
        </Route>
    )
);
