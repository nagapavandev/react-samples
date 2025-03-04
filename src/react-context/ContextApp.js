import {ThemeProvider} from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { Link } from 'react-router-dom';
function ContextApp() {
  return (
        <ThemeProvider>
      <div>
        <h1>React Context API Example</h1>
        <ThemeSwitcher />
      </div>
       <Link to="/">Back To MainApp</Link> 
    </ThemeProvider>
  );
}

export default ContextApp;
