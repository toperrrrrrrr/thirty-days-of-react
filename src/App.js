import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./projects/Dashboard/Dashboard";
import NotFound from "./projects/Dashboard/NotFound";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
}

export default App;
