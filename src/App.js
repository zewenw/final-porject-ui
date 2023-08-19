import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import UserList from "./components/user/UserList";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <Layout>
        <UserList />
      </Layout> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
