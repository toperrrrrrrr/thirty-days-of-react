import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./projects/Dashboard/Dashboard";
import NotFound from "./projects/Dashboard/NotFound";

import Dir from "./projects/Dir";
import Main from "./projects/Sysiphus/Main";
import SSMain from "./projects/SwftServe/SSMain";
function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Dir />}></Route>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="SSMain" element={<SSMain />}></Route>
            <Route path="Sisyphus" element={<Main />}></Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
}

export default App;
