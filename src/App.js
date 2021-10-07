import './App.css';
import DataProvider from './Components/DataProvider';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import About from './Components/About';
import Doctors from './Components/Doctors';
import News from './Components/News';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Navbar />
      <Home />
      <Switch>
  <>
  <Route exact path='/' component={Home} />
  <Route  path='/About' component={About} />
  <Route  path='/Doctors' component={Doctors} />
  <Route  path='/News' component={News} />

    </>
    </Switch>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
