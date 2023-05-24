import React from 'react'
export default function Ranges_loan(props) {

    const y = parseInt(props.incrementCarPrice / props.incrementMonth)
    const x = parseInt(props.incrementPersonalPrice / props.incrementMonth)

    return (
        <>

            <div className="container my-5" id='finance_plans' data-aos='flip-up'>
                <h3 className="font-weight-bold text-center text-success"><strong>FINANCIAL PLANNING</strong></h3>
                <h1 className="font-weight-light text-center">LET'S PLAN YOUR FINANCES THE RIGHT WAY</h1>
            </div>
            <div className="container my-5">
                <ul className="my-3 nav nav-pills nav-fill mb-3 text-center justify-content-center " id="pills-tab" role="tablist" data-aos='flip-up'>
                    <li className="nav-item mx-3 " >
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-CarsLoan" role="tab" aria-controls="pills-home" aria-selected="true">CAR LOAN</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-PersonalLoan" role="tab" aria-controls="pills-profile" aria-selected="false">PERSONAL LOAN</a>
                    </li>
                </ul>


                <div className="tab-content" id="pills-tabContent" data-aos='flip-down'>
                    <div className="tab-pane fade show active " id="pills-CarsLoan" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div id='app_konnect' >
                            <img className="img-fluid " src="https://www.hbl.com/assets/home-webp/car-loan_1.webp" alt="" />
                            <div className="container-fluid p-5 ">
                                <h2 className='mx-2 font-weight-light text-success'> <label for="customRange1" className="form-label">VEHICLE PRICE</label> </h2>
                                <div className=''>
                                    <input onChange={props.changingCarValues} min="500000" max="10000000" type="range" className="form-range mx-3" />
                                    <div className="text-center ml-2 my-3 p-3" id='car_loan_price_text'>
                                        <h2>PKR {props.incrementCarPrice} </h2>
                                    </div>
                                </div>
                                <h2 className='mx-2 font-weight-light text-success'> <label for="customRange1" className="form-label">TO REPAY IN</label> </h2>
                                <div className=''>
                                    <input onChange={props.changingMonthValues} min="1" max="12" step='1' type="range" className="form-range mx-3" />
                                    <div className="text-center ml-2 my-3 p-3" id='car_loan_price_text'>
                                        <h2>{props.incrementMonth} </h2>
                                    </div>
                                </div>
                                <h4 className='text-success'>INSTALLMENTS YOU HAVE TO PAY</h4>
                                <div className="text-center ml-2 my-3 p-3" id='car_loan_price_text'>
                                    <h2> {!y ? '0' : y } </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-PersonalLoan" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div id='app_konnect' >
                            <img className="img-fluid " src="https://www.hbl.com/assets/home-webp/personal-loan.webp" alt="" />
                            <div className="container-fluid p-5 ">
                                <h2 className='mx-2 font-weight-light text-success'> <label for="customRange1" className="form-label">I WANT TO BORROW</label> </h2>
                                <div className=''>
                                    <input onChange={props.changingPersonalValues} min="25000" max="100000" type="range" className="form-range mx-3" />
                                    <div className="text-center ml-2 my-3 p-3" id='car_loan_price_text'>
                                        <h2>PKR {props.incrementPersonalPrice} </h2>
                                    </div>
                                </div>
                                <h2 className='mx-2 font-weight-light text-success'> <label for="customRange1" className="form-label">TO REPAY IN</label> </h2>
                                <div className=''>
                                    <input onChange={props.changingMonthValues} min="1" max="12" step='1' type="range" className="form-range mx-3" />
                                    <div className="text-center ml-2 my-3 p-3" id='car_loan_price_text'>
                                        <h2>{props.incrementMonth} </h2>
                                    </div>
                                </div>
                                <h4 className='text-success'>INSTALLMENTS YOU HAVE TO PAY</h4>
                                <div className="text-center ml-2 my-3 p-3" id='car_loan_price_text'>
                                    <h2>{!x ? '0' : x} </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
