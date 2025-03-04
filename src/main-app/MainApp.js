import {Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>Welcome to sample apps</h1>
      <nav>
        <Link to="/contextApp">Context app Example</Link> 
      </nav>
    </div>
  );
}

export default App;