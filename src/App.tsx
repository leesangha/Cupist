import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Card from "./components/Card";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/card" component={Card}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
