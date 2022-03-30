import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/pages/Home';
import  Contest  from './components/pages/Contest';
import { Dev } from './components/pages/Dev';
import  Forum from './components/pages/Forum';
import { Contact } from './components/pages/Contact';
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import { Footer } from './components/pages/Footer';
import  Profile  from './components/pages/Profile';




 

function App() {
  return (
    <>
      
     <Router>
    <Navbar />
    <div>
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login">
          <Login/>
          </Route>
          <Route exact path="/Contest">
          <Contest/>
          </Route>
          <Route exact path="/SignUp">
          <SignUp/>
          </Route>

          <Route exact path="/Profile" component={Profile} />

      <Route exact path="/Dev" component={Dev} />
      <Route exact path="/Forum" component={Forum} />
      <Route exact path="/Contact" component={Contact} />
     
    </Switch>
    </div>
  <Footer />
  </Router> 
  
  </>
  );
  
}

export default App;


