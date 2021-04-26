import { useContext, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/navigation/navbar';
import Homepage from './routes/homepage';
import About from './routes/about';
import AllPrograms from './routes/all-programs';
import Program from './routes/program';
import BlogArchive from './routes/blogs-archive';
import Blog from './routes/blog';
import Footer from './components/navigation/footer';
import { cartContext } from './context/cart-context';
import ShoppingCart from './components/shopping-cart-modal';
import { locationContext } from './context/location-context';
import GUI from './components/customize-gui';
import Admin from './routes/admin';
import AdminLogin from './routes/admin-login';
import './App.css';

function App() {

  const [cartIsOpen, setCartIsOpen] = useContext(cartContext);
  
  const [location] = useContext(locationContext);
  
  useEffect(() => {
    setCartIsOpen(false)
  }, [location])
  
  return (
    <div className="App">
      <Router>
            <Navbar />

              { cartIsOpen ? <ShoppingCart /> : "" }

                <Route exact path="/">
                    <GUI />
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

                <Route exact path="/admin">
                  <Admin />
                </Route>

                <Route  path="/admin/login">
                  <AdminLogin />
                </Route>

            <Footer />
      </Router>
    </div>
  );
}

export default App;
