import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';

function Header() {

    const user = useSelector((state) => state.auth);
    const navigate = useNavigate();

    return (
        <>
            <header className="p-3 bg-dark text-white">
                <Container>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
                            <li><Link to="/" className="nav-link px-2 text-white">Features</Link></li>
                            <li><Link to="/" className="nav-link px-2 text-white">Pricing</Link></li>
                            <li><Link to="/" className="nav-link px-2 text-white">FAQs</Link></li>
                            <li><Link to="/" className="nav-link px-2 text-white">About</Link></li>
                        </ul>

                        <div className="text-end">
                            {user.loggedIn ? 
                            <LogoutBtn />
                            :
                            <>
                            <Button 
                            variant="outline-light" 
                            className="me-2"
                            onClick={() => navigate('/login')}
                            >Login</Button>
                            <Button 
                            variant="warning"
                            onClick={() => navigate('/signup')}
                            >Sign-up</Button>
                            </>
                            }
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header