import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateProject from "./components/task-1/CreateProject"
import CreateProfile from "./components/task-2/CreateProfile"
import Home from "./components/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-1" element={<CreateProject />} />
        <Route path="/task-2" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App