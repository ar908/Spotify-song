import React, { useState } from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Index from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbars from "./components/Navbars";
import Addsongs from "./components/Addsongs";
import Modals from "./components/Modals";
import Login from "./page/Login";
function App() {

    // const [isLoggedIn, setisLoggedIn] = useState(false);
    const isLoggedIn = false
    return (
        <div className="App">
            {/* <Index /> */}
            <Router>
                <Navbars />
                {/* {isLoggedIn ? (<Route path="/login" element={<Login />} />) : "please login"} */}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/song" element={<Addsongs />} />
                    <Route path="/addartist" element={<Modals />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App;
