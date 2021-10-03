import React, { useState, useEffect } from 'react'
import {
    Dropdown,
    Card,
    Button
} from 'react-bootstrap'
import Avatar from '../../assets/img/Avatar/programmer.png'
import { Link, withRouter } from 'react-router-dom'
import { getAuth, signOut } from '@firebase/auth';

const Navbar = ({ history }) => {
    const logout = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            history.push('/please-login')
        }
    }, [])

    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)
    const [profile, setprofile] = useState({
        name: user ? user.displayName : "",
        imageUrl: "",
    })

    return (
        
        <header className="p-3 bg-dark text-white">
            <div className="container-fluid">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/dashboard" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="/logo.png" className="img-fluid" style={{
                            height: "50px"
                        }} alt="" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 text-secondary"> HOME </Link></li>
                        <li><Link to="/dashboard/about" className="nav-link px-2 text-white">ABOUT</Link></li>
                        <li><Link to="/dashboard/exam" className="nav-link px-2 text-white"> EXAM</Link></li>
                    </ul>

                    <Dropdown className="dropdown profile">
                        <Dropdown.Toggle variant="outline-primary" class="btn btn-secondary dropdown-toggle rounded-circle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={Avatar} alt="" width="40px" heigth="40px" className="circle-rounded" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <Dropdown.Item>
                                <Card style={{ width: '18rem', paddingTop: "10px" }} className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Img variant="top" src={Avatar} style={{ width: '10rem', height: "10rem" }} className="text-center border border-2 border-dark rounded-circle" />
                                    <Card.Body className="text-center">
                                        <Card.Title >{profile.name}</Card.Title>
                                        <Card.Text>
                                            HAPPY TO SEE U
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <Button variant="outline-danger" size="lg" onClick={logout}>Sign Out</Button>
                                    </Card.Footer>
                                </Card>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}
export default withRouter(Navbar)