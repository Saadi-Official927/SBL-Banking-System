import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './nsv_style.css'


export default function Navbar(props) {

    const location = useLocation()
    const history = useNavigate()

    useEffect(() => {
        console.log(location.pathname)
    }, [location])
    const handleLogout = () => {
        localStorage.removeItem('token')
        history('/login')
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            history("/")

        }
        else {
            history("/login")
        }
    }, [])

    return (
        <>
            {/* tabs */}
            <ul className="nav nav-tabs justify-content-center my-1" id="myTab" role="tablist" data-aos="zoom-in">
                <li className="nav-item mx-2" data-aos="fade-right">
                    <a className="nav-link active text-light bg-success" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Personal</a>
                </li>
                <li className="nav-item" data-aos="fade-left">
                    <a className="nav-link text-light bg-success" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Teaser</a>
                </li>
            </ul>

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 " data-aos='zoom-in-down'>
                <a style={{ fontSize: '25px' }} className="navbar-brand" onClick={() => window.location.reload(false)} href="">SBL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto container">
                        <li className="nav-item ">
                            <a className={`nav-link ${location.pathname === "/" ? "" : "active"}`} href="#pills-tab">App & Konnect <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className={`nav-link ${location.pathname === "/" ? "" : "active"}`} href="#discount-div">Deals & Discounts <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className={`nav-link ${location.pathname === "/" ? "" : "active"}`} href="#finance_plans">Financial Plans<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ? <form className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-outline-info mx-1 my-2 my-sm-0" to='/login' role="button">Login</Link>
                    </form> : <button className="btn btn-outline-success" onClick={handleLogout} >Logout</button>}
                </div>
            </nav>

            {/* ------------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="container mt-4">
                <nav className=" navbar navbar-expand-lg navbar-light bg-dark " data-aos='zoom-in-down' >
                    <ul className="navbar-nav mr-auto container ">
                        <li className="nav-item ">
                            <Link className="nav-link rounded text-light btn btn-outline-success px-3 " to="/deposit-the-balance">Deposit</Link>
                        </li>
                        <li className="nav-item active ">
                            <Link className="nav-link rounded text-light btn btn-outline-success px-3 " to="/check-the-balance">Check the Balance <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link rounded text-light btn btn-outline-success px-3 " to="/transfer-the-balance">Transfer the Balance</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link rounded text-light btn btn-outline-success px-3 " to="/packages">Top-up/ Easy Loadon Sim</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}