import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Minheader from "./pages/Minheader";
import Jobreview from "./pages/Jobreview";
import Applicants from "./pages/Applicants";
import Match from "./pages/Match";
import Message from "./pages/Message";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <div className="">
      <Router>
        <div class="">
          <Minheader />
          <Header />
        </div>
        <Routes>
          <Route path="/job-preview" element={<Jobreview />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/match" element={<Match />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
