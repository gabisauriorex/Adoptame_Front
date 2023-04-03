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
import Register from "./components/Register/Register"

import ProtectLogin from "./components/Auth0/ProtectLogin";

function AllRoutes() {

  //const location = useLocation();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/adopta" element={<Adopta />} />
        <Route exact path="/pets/:id" element={<Detail />} />
        <Route exact/* ={true} */ path="/home" 
               element={
                <ProtectLogin> 
                   <Home />
                 </ProtectLogin> 
                } />
        <Route exact path="/createUsuario" element={<Register />} />
        <Route exact path="/dona" element={<Dona />} />
        <Route exact path="/about" element={<About />} />
        <Route exact/* ={true} */ path="/createPet" 
          element={
         <ProtectLogin>
              <CreatePet />    
         </ProtectLogin> 
        } />
     
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;


/* 

import Landing from "./pages/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Detail from "./components/Detail/Detail";
import Dona from './components/Dona/Dona'
import NavBar from './common/NavBar/NavBar'
import About from "./pages/About/About";
import Profile from "./common/Account/Profile";
import CreatePet from "./components/CreatePet/CreatePet";
import ProtectLogin from "./components/Auth0/ProtectLogin";

function AllRoutes() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/adopta" element={<Adopta />} />
        <Route exact path="/pets/:id" element={<Detail />} />
        <Route
          path="/home"
          element={
            <ProtectLogin >
              <Adopta />
            </ProtectLogin>
          }
        />
        <Route
          path="/createPet"
          element={
            <ProtectLogin >
              <CreatePet />
            </ProtectLogin>
          }
        />
        <Route exact path="/dona" element={<Dona />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
*/

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

