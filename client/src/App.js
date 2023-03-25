import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Message from "./views/Message" 

function App() {
  return (
    <BrowserRouter>
    <h1>Home Page</h1>

      <Switch>
        <Route exact path="/message">
          <Message/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
