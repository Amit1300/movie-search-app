import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Add from './components/Add';
import Watched from './components/Watched';
import Wishlist from './components/Wishlist';
import GlobalProvider from "./context/globalProvider"
function App() {
  return (
    <div className="App">
    <GlobalProvider>
    
    <Router>
        <Header />

        <Switch>
          <Route exact path="/wishlist">
            <Wishlist/>
          </Route>
          <Route path="/add">
            <Add/>
          </Route>
          <Route path="/watched">
            <Watched/>
          </Route>
        </Switch>
      </Router>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
