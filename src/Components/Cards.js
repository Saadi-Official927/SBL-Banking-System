import React from 'react'

export default function Cards() {
    return (
        <>
            <div className=" my-5" id='discount-div'>
                <div className="d-inline float-left mx-4 my-5" data-aos='fade-right'>
                    <h1 className='font-weight-light' >BEST <br /> DISCOUNTS <br /> EXCLUSIVELY <br /> FOR YOU ON <br /> HBL</h1>
                    <button id='vdeitailsbtn' type="button" className="btn btn-success btn-lg justify-content-center text-center mt-3 mb-2">More Details</button>
                </div>
                <div class="card-deck mx-5 my-2 " data-aos='fade-left'>
                    <div class="card" >
                        <img class="card-img-top img-fluid" src="https://www.hbl.com/assets/home-webp/Aga-khan-new-1.webp" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://www.hbl.com/assets/home-webp/image_2021_02_02T12_28_53_363Z.webp" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card" >
                        <img class="card-img-top" src="https://www.hbl.com/assets/home-webp/image_2021_02_04T13_45_13_197Z.webp" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src="https://www.hbl.com/assets/home-webp/konnect.webp" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
