import React from 'react';
import {Link} from "react-router-dom";

function Login({ingelogd, change}) {

    return (
        <div>
            <h1>Welkom op de loginpagina</h1>
            <p>Klik hier om in te loggen</p>
            <button type="button" onClick={() => change(!ingelogd)}><Link to="/blogposts">Inloggen</Link>
            </button>
        </div>
    )
}

export default Login;
