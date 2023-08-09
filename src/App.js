import { v4 as uuidv4 } from "uuid";
import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Card from "./components/shared/Card";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStatus feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/post/*" element={<Post />}></Route>
        </Routes>

        <Card>
          <NavLink to="/" className={({isActive}) => (isActive ? "active" : 'none')}>
            Home
          </NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? "active" : 'none')}>
            About
          </NavLink>
        </Card>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
