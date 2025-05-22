import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div>LAB307 Technologies Inc.</div>
                <div>
                  <a href="mailto:support@lab307.studio">
                    support@lab307.studio
                  </a>
                </div>
                <div>
                  <Link to="/privacy-policy">zzz: Privacy Policy</Link>
                </div>
              </div>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
