import './App.scss';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Chats from "./components/Chats/Chats";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Header />
            <Switch>
                <Route path='/chats'>
                    <Chats/>
                </Route>
                <Route path='/'>
                    <Login />
                </Route>
            </Switch>
        </div>
    </div>
  );
}

export default App;
