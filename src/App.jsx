// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Details from "./pages/Details";
// import Favorites from "./pages/Favorites";
// import Navbar from "./components/Navbar";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/details/:date" element={<Details />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//     </>
//   );
// };

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:date" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
