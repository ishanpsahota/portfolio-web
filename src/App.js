

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// views
import Home from './views/home/Home'

// components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App container-fluid p-0  m-0" id="app">      
        <header className="header-wrapper">
            <Navbar />
        </header>
        <Switch>                  
          <Route exact path="/">  
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>    
    </Router>
  );
}


export default App;
