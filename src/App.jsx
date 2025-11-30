import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
 import { Home } from "./Components/Home"
import { ProjectsList } from "./Components/ProjectsList"
import { ImgDetails } from "./Components/ImgDetails";
import { Project } from "./Components/Project";

function App() {
   
  return (
    <>

      
    
      <Router>
           
        <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/projects" element={<ProjectsList />} />
          <Route  path= "/imgDetails/:id" element={<ImgDetails />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
