import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ScrollProvider } from './context/scroll-context';
import Homepage from './routes/homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollProvider>
          <Homepage />
      </ScrollProvider>
    </div>
  );
}

export default App;
