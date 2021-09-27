import React from 'react'

function Footer() {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
            <div className="conatiner">
                <div className="icon">
                    <a href="#" className="fa-stack fa-2x" aria-hidden="true" style={{ margin: "0 10px", cursor: "pointer" }}>
                        <i className="bi bi-house-door text-dark"></i>
                    </a>
                    <a href="mailto:languagebuddy@gmail.com" className="fa-stack fa-2x" aria-hidden="true" style={{ margin: "0 10px", cursor: "pointer" }}>
                        <i className="bi bi-envelope-fill  text-dark"></i>
                    </a >
                    <a href="#" className="fa-stack fa-2x" aria-hidden="true" style={{ margin: "0 10px", cursor: "pointer" }}>
                        <i className="bi bi-github  text-dark"></i>
                    </a >
                    <a href="#" className="fa-stack fa-2x" aria-hidden="true" style={{ margin: "0 10px", cursor: "pointer" }}>
                        <i className="bi bi-facebook  text-dark"></i>
                    </a >
                </div>
            </div>
            <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2020 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>
    )
}

export default Footer
