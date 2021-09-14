import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import { CustomerWrapper } from './store';

import Login from './pages/Login';
import Home from './pages/Home'

function App() {
  return (
    <CustomerWrapper>
      <BrowserRouter>
        <Route path="/auth/signin" component={Login} />
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </CustomerWrapper>
  );
}

export default App;
