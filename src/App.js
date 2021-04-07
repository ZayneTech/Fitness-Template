import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ScrollProvider } from './context/scroll-context';
import Homepage from './routes/homepage';
import About from './routes/about';
import AllPrograms from './routes/all-programs';
import BlogArchive from './routes/blogs-archive';
import Blog from './routes/blog';
import Program from './routes/program';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollProvider>
          <Navbar />

              <Route exact path="/">
                  <Homepage />
              </Route>

              <Route path="/about">
                  <About />
              </Route>

              <Route exact path="/programs">
                  <AllPrograms />
              </Route>

              <Route path="/programs/program">
                  <Program />
              </Route>

              <Route exact path="/blogs">
                  <BlogArchive />
              </Route>

              <Route path="/blogs/blog">
                  <Blog />
              </Route>

              <Route path="/contact">

              </Route>

          <Footer />
        </ScrollProvider>
      </Router>
    </div>
  );
}

export default App;
