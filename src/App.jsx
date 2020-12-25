import logo from './logo.svg';
import './App.css';
import Home from './mycomponent/Home';
import About from './mycomponent/About';
import Services from './mycomponent/Services';
import Contact from './mycomponent/Contact';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
             <>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/contact" component={Contact}/>
             <Redirect to="/"/>
          </Switch>  
             </>         
  );
}

export default App;
