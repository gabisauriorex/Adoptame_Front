
import axios from 'axios'
import './App.css'
import AllRoutes from './AllRoutes'
//axios.defaults.baseURL="http://localhost:3000/";  //por el servidor local

axios.defaults.baseURL = "https://adoptame-back.onrender.com/" ;   //por el hosting render     
function App() {
 return(
   <>
  <AllRoutes/>
  </>
 )
 
}

export default App
