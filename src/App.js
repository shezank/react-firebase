import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componend/Home/Home';
import Login from './Componend/Login/Login';
import Register from './Componend/Register/Register';
import Header from './Componend/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="/Register">
            <Register></Register>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
