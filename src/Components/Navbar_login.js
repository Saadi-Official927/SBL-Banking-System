import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './nsv_style.css'


export default function Navbar_login(props) {
    useEffect(() => {
    }, [])

    return (
        <> <div className="my-2">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 " data-aos='zoom-in-down'>
                <a style={{ fontSize: '25px' }} className="navbar-brand" onClick={() => window.location.reload(false)} href="">SBL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto container">
                        <li className="nav-item active">

                        </li>
                        <li className="nav-item active">

                        </li>
                        <li className="nav-item active container text-center justify-content-center">
                            <h1 className='text-light'>Sis Bank Limited</h1>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}