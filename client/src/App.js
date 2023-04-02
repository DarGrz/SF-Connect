import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AllContacts from "./pages/AllContacts";
import CreateContact from "./pages/CreateContact";

function App() {
  return (
    <div className="App">
      <h1>SF-Connect</h1>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" />
          <Route path="/all-contacts" element={<AllContacts />} />
          <Route path="/create-contact" element={<CreateContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
