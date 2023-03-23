
import axios from 'axios'
import './App.css'
import AllRoutes from './AllRoutes'
axios.defaults.baseURL="http://localhost:3000/";
function App() {
 return(
   <>
  <AllRoutes/>
  </>
 )
 
}

export default App
