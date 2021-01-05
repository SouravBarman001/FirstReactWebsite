import logo from './logo.svg';
import './App.css';
import Home from './mycomponent/Home';
import About from './mycomponent/About';
import Services from './mycomponent/Services';
import Contact from './mycomponent/Contact';
import Footer from "./mycomponent/Footer"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './mycomponent/Navbar';

function App() {
  return (
             <>
             <Navbar></Navbar>
            
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/contact" component={Contact}/>
             <Redirect to="/"/>
          </Switch>  
                <Footer></Footer>
             </>         
  );
}

export default App;
