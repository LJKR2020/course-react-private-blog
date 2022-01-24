import React, {useState} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import TopMenu from "./Components/TopMenu";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Blogpost from "./pages/Blogpost";

function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <TopMenu ingelogd={isAuthenticated}
                     change={toggleIsAuthenticated}/>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login ingelogd={isAuthenticated}
                           change={toggleIsAuthenticated}
                    />
                </Route>
                <Route exact path="/blogposts">
                    {isAuthenticated ? <Overview /> : <Redirect to={"/login"}/>}
                </Route>
                <Route path="/blogposts/:blogId">
                    {isAuthenticated ? <Blogpost /> : <Redirect to="/login"/>}
                </Route>
            </Switch>
        </>
    );
}

export default App;
