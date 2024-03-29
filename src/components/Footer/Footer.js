import React from "react";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="name">Branislav Rendulić</p>
            <p className="copyright"><sup><i style={{ fontSize: "0.7rem" }} className="fas fa-copyright"></i></sup> Copyright 2023</p>
        </footer>
    )
}
