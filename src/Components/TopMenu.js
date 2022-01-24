import React from 'react';
import {NavLink} from "react-router-dom";

function TopMenu({ingelogd, change}) {

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName=".active-link">
                            Home</NavLink></li>
                    <li>
                        <NavLink exact to="/login" activeClassName=".active-link">
                            Login</NavLink></li>
                    {ingelogd ?
                        <>
                            <li><NavLink to="/blogposts">Overzicht</NavLink></li>
                            <button type="button" onClick={() => change(!ingelogd)}>Uitloggen</button>
                        </>
                        : ""}

                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;