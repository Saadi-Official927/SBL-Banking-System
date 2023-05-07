import React from 'react'

export default function Navbar_below_component() {
  return (
    <>
    
            {/* Personal tab*/}
            <div className="tab-content my-4" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel" data-aos='flip-right'>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" >
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="First slide" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-dark font-weight-bold'>Saad Islamic Banking System</h5>
                                    <p className='text-dark'>The Banking system is all about to serve people</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1668943599650-2e63ecaef386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://images.unsplash.com/photo-1601041084273-6114cad589d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                {/* teaser */}
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div id='tVideo' className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://youtube.com/embed/mffPI14Wzo4" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="container" data-aos='zoom-in'>
                <div className="container">
                    <h1 className='text-success text-center ' >
                        Banking On The GO!
                        <br />
                        _________________
                    </h1>
                    <div className="container text-center" id='svgText'>
                        ELEVATE YOUR BANKING EXPERIENCE WITH THE BEST BANK IN PAKISTAN ANYTIME, ANYWHERE
                    </div>
                </div>
            </div>
    </>
  )
}
