import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ScrollProvider } from './context/scroll-context';
import Homepage from './routes/homepage';
import About from './routes/about';
import AllPrograms from './routes/all-programs';
import './App.css';
import BlogArchive from './routes/blogs-archive';
import Blog from './routes/blog';

function App() {
  return (
    <div className="App">
      <ScrollProvider>
          <Blog />
      </ScrollProvider>
    </div>
  );
}

export default App;
