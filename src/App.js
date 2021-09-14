import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import { CustomerWrapper } from './store';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <CustomerWrapper>
      <BrowserRouter>
        <Route path="/auth/signin" component={Login} />
        <Route path="/" exact component={About} />
        <Route path="/home" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
      </BrowserRouter>
    </CustomerWrapper>
  );
}

export default App;
