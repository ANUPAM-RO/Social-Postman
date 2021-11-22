import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import CreateSchedular from "./components/CreateSchedular";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Logout from "./components/Logout";

function App() {

 
  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Loginpage />}/>
        </Routes>
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
        </Routes>
        <Routes>
          <Route path="/schedular" element={<CreateSchedular />}/>
        </Routes>
        <Routes>
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </Router>
    
    </>
  );
  }

export default App;
