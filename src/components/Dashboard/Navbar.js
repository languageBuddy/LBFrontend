import React from 'react'
import {
    Dropdown
} from 'react-bootstrap'

function Navbar() {
    return (
        <header className="p-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink href="#bootstrap"></use></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        <button type="button" className="btn btn-primary" > Search </button>
                    </form>
                    {/* <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className="reactButton" >
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Navbar
