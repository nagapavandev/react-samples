import './App.css';
/**
 * BrowserRouter is the most commonly used router for React applications. 
 * It uses the browser's history API (pushState, replaceState, and popstate event) 
 * to manage navigation.
 * 
 * Router is a low-level component that requires a custom history object. 
 * It is not meant to be used directly unless you're implementing a custom router.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextApp from './react-context/ContextApp';
import MainApp from './main-app/MainApp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contextApp/*" element={<ContextApp />} />
        <Route path="*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;
