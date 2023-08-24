import "./App.css";
import Nav from "./Components/Nav";
import { Outlet} from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
