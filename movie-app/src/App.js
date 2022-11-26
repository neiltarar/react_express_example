import Navbar from "./componenets/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home  name={'Neil'}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
