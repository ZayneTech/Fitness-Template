import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ScrollProvider } from './context/scroll-context';
import Homepage from './routes/homepage';
import About from './routes/about';
import AllPrograms from './routes/all-programs';
import './App.css';
import BlogArchive from './routes/blogs-archive';
import Blog from './routes/blog';
import Program from './routes/program';

function App() {
  return (
    <div className="App">
      <ScrollProvider>
          <Program />
      </ScrollProvider>
    </div>
  );
}

export default App;
