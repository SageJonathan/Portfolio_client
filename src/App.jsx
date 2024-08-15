import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav";
// import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App