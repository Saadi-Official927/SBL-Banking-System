import React from 'react'

export default function AppTabs(props) {

    return (
        <>
            <div className="container my-5 ">
                <div className="container ">
                    <ul className="my-3 nav nav-pills nav-fill mb-3 text-center justify-content-center " id="pills-tab" role="tablist" data-aos='fade-down'>
                        <li className="nav-item mx-3">
                            <a className="nav-link active " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Mobile App</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Konnect with <strong>SBL</strong></a>
                        </li>
                    </ul>


                    <div className="tab-content  " id="pills-tabContent" data-aos="fade-right">
                        <div className="container tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div id='app_konnect'>
                                <img className="img-fluid " src="https://www.hbl.com/assets/home-webp/botg-hbl-mobile-day-792x558.webp" alt="" />
                                <div className='d-flex flex-column'>
                                    <h1 className='text-success mt-3' ><strong className='mt-3'>SBL MOBILE</strong></h1>
                                    <br />
                                    <h1 style={{ fontWeight: 'lighter' }} className='text-center text-lighter'>BANKING AT YOUR FINGERTIPS</h1>
                                    <div className="container justify-content-center text-center">
                                        <button id='vdeitailsbtn' type="button" className="btn btn-success btn-lg justify-content-center text-center mt-5">Download Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div id='app_konnect'>
                                <img className="img-fluid" src="https://www.hbl.com/assets/home-webp/homepersonal-konnect-day.webp" alt="" />
                                <div className='d-flex flex-column'>
                                    <h1 className='text-success mt-3' ><strong className='mt-3'>KONNECT</strong></h1>
                                    <br />
                                    <h1 style={{ fontWeight: 'lighter' }} className='text-center text-lighter'>YOUR PERSONALIZED BANKING EXPERIENCE</h1>
                                    <div className="container justify-content-center text-center">
                                        <button id='vdeitailsbtn' type="button" className="btn btn-success btn-lg justify-content-center text-center mt-5">More Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container text-center justify-content-center" data-aos='zoom-out'>
                    <h1 className='text-success' >DEALS AND DISCOUNTS</h1>
                    <h1 style={{ fontWeight: 'lighter' }}>WHO DOESN'T LOVE DISCOUNTS?</h1>
                </div>
            </div>

        </>
    )
}