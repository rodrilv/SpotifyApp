import React from "react";
export default function Nav() {
    return (
        <nav style={ {borderRadius : "10px", marginTop:"1%"} } className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <p className="navbar-brand"> Spotify App!</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" href="https://github.com/rodrilv/SpotifyApp">Github Repo!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}