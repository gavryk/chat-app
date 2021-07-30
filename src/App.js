import './App.scss';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Chats from "./components/Chats/Chats";
import Login from "./components/Login/Login";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
        <AuthProvider>
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
        </AuthProvider>
    </div>
  );
}

export default App;
