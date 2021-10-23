import React from "react";

import NavBar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <NavBar /> <Sidebar />
      <div>APP component</div>
    </>
  );
};

export default App;
