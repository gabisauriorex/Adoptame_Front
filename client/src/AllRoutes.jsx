

import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { Route, Routes, useLocation, Navigate, Link } from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Detail from "./components/Detail/Detail";
import Dona from './components/Dona/Dona'
import NavBar from './common/NavBar/NavBar'
import About from "./pages/About/About";
import Profile from "./common/Account/Profile";
import CreatePet from "./components/CreatePet/CreatePet";
import Dashboard from "./pages/Dashboard/Dashboard"
import { useAuth0 } from '@auth0/auth0-react';


function AllRoutes() {
  const { isAuthenticated } = useAuth0();

  //const location = useLocation();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/adopta" element={<Adopta />} />
        <Route exact path="/pets/:id" element={<Detail />} />
        <Route exact={true} path="/home" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/dona" element={<Dona />} />
        <Route exact path="/about" element={<About />} />
        <Route exact={true} path="/createPet" element={<CreatePet/>} />
     
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;




{/*     isAuthenticated ? (
            <Link>
              <Home />
            </Link>
          ) : (
            <Navigate to="/" />
          )} /> */}

{/*   isAuthenticated ? (
            <Link>
              <CreatePet />
            </Link>
          ) : (
            <Navigate to="/" />
          )} /> */}

/* import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { Route, Routes ,useLocation} from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Detail from "./components/Detail/Detail";
import Dona from './components/Dona/Dona'
import NavBar  from './common/NavBar/NavBar'
import About from "./pages/About/About";
import Profile from "./common/Account/Profile";
import CreatePet from "./components/CreatePet/CreatePet";

function AllRoutes() {
const location = useLocation();

  return (
    <div>
        <NavBar/>  
          <Routes>
          <Route exact path="/"  element={<Landing/>} /> 
          <Route exact path="/adopta" element={<Adopta/>} />
          <Route exact path="/pets/:id" element={<Detail/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/dona" element={<Dona/>} />
         <Route exact path="/about" element={<About/>} />
         <Route exact path="/createPet" element={<CreatePet/>} />
         <Route exact path="/profile" element={<Profile/>} />
        </Routes>

     </div>
  );
}

export default AllRoutes;
 */
