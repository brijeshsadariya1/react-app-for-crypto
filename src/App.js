import React from "react";

import NavBar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <NavBar /> <Sidebar />
      <div>APP component</div>
    <div/>
  );
};

export default App;
