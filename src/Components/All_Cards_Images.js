import React from 'react'

export default function All_Cards_Images() {
    return (
        <>
            <div className="container my-5" data-aos='zoom-in-down'>
                <h3 className="font-weight-bold text-center text-success"><strong>EMPOLYEE OF THE YEAR</strong></h3>
                <h1 className="font-weight-light text-center">A LOT MORE TO KNOW </h1>
            </div>
            <div className="my-5">
                <div id='images_1stSlide' className=" d-flex justify-content-between container my-5">
                    <a className='my-2' id='images_anchor' href="https://www.hbl.com/personal/accounts/current/current-accounts-overview" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '400px', height: 'auto' }} data-aos='fade-right' src="https://www.hbl.com/assets/images/HBL_D1.png" className="rounded float-left img-fluid" alt="..." />
                    </a>
                    <a className='my-2' id='images_anchor' href="https://www.hbl.com/personal/accounts/term-deposit-accounts/hbl-notice-deposit-nd" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '400px', height: 'auto' }} data-aos='fade-down' src="https://www.hbl.com/assets/images/Day_6_600X500.png" className="rounded float-left img-fluid" alt="..." />
                    </a>
                    <a className='my-2' id='images_anchor' href="https://www.hbl.com/personal/accounts#hbl-nisa" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '400px', height: 'auto' }} data-aos='fade-left' src="https://www.hbl.com/assets/images/headers-day.png" className="rounded float-left img-fluid" alt="..." />
                    </a>
                </div>
                <div id='images_1stSlide' className="d-flex justify-content-between container my-5">
                    <a className='my-2' id='images_anchor' href="https://www.hbl.com/personal/accounts/saving/hbl-pls-savingsaccount" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '400px', height: 'auto' }} data-aos='fade-right' src="https://www.hbl.com/assets/images/HBL_N2.png" className="rounded float-left img-fluid" alt="..." />
                    </a>
                    <a className='my-2' id='images_anchor' href="https://www.hbl.com/personal/accounts/term-deposit-accounts/term-deposit-accounts-overview" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '400px', height: 'auto' }} data-aos='fade-up' src="https://www.hbl.com/assets/images/Day_3_600X500.png" className="rounded float-left img-fluid" alt="..." />
                    </a>
                    <a className='my-2' id='images_anchor' href="https://www.hbl.com/personal/accounts/term-deposit-accounts/high-yield-foreignfixeddeposit" target="_blank" rel="noopener noreferrer">
                        <img style={{ width: '400px', height: 'auto' }} data-aos='fade-left' src="https://www.hbl.com/assets/images/businessfinance_1.png" className="rounded float-left img-fluid" alt="..." />
                    </a>
                </div>
            </div>
        </>
    )
}
