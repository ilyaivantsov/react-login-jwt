import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import { ClientWrapper, CustomerWrapper } from './store';

import Login from './pages/Login';
import Home from './pages/Home'

function App() {
  return (
    <ClientWrapper>
      <CustomerWrapper>
        <BrowserRouter>
          <Route path="/auth/signin" component={Login} />
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </CustomerWrapper>
    </ClientWrapper>
  );
}

export default App;
