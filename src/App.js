import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import { ClientWrapper, CustomerWrapper } from "./store";

import Login from "./pages/Login";

function App() {
  return (
    <ClientWrapper>
      <CustomerWrapper>
        <BrowserRouter>
          <Route path="/auth/signin" component={Login} />
        </BrowserRouter>
      </CustomerWrapper>
    </ClientWrapper>
  );
}

export default App;
