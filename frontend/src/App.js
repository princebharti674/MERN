import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./Actions/User";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";


function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
    console.log("isAuthenticated", isAuthenticated);
  }, [ dispatch, isAuthenticated ]);


  return (
    <Router>
      {
        isAuthenticated && <Header />
      }
      <Routes>
        <Route  path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
