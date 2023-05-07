import React from 'react'

export default function Card_Tabs() {
    return (
        <>
            <div className="container my-5">
                <div className="container my-5" data-aos='zoom-out'>
                    <h3 className="font-weight-bold text-center text-success"><strong>SBL CARDS</strong></h3>
                    <h1 className="font-weight-light text-center">ACCESS ENDLESS POSSIBILITIES WITH HBL CARDS</h1>
                </div>
                <div className="container ">
                    <ul className="my-3  nav nav-pills nav-fill mb-3 text-center justify-content-center " id="pills-tab" role="tablist" >
                        <li className="nav-item mx-3" data-aos='fade-right'>
                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-credit" role="tab" aria-controls="pills-home" aria-selected="true">SBL CREDITCARD</a>
                        </li>
                        <li className="nav-item" data-aos='fade-left'>
                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-debit" role="tab" aria-controls="pills-profile" aria-selected="false">SBL DEBITCARD</a>
                        </li>
                    </ul>


                    <div className="tab-content" id="pills-tabContent" data-aos="fade-right">
                        <div className="container tab-pane fade show active " id="pills-credit" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div id='app_konnect' className='container'>
                                <div className="container my-5">
                                    <a href="https://www.hbl.com/personal/cards/credit-cards/platinum-credit-card" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/New_Platinum_Visa_Card_275X162_(1).webp" alt="" />
                                    </a>
                                    <a href="https://www.hbl.com/personal/cards/credit-cards/hbl-gold-green-credit-card" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/New_Gold_Visa_Card_275X162_(1).webp" alt="" />
                                    </a>
                                    <a href="https://www.hbl.com/personal/cards/credit-cards/hbl-gold-green-credit-card" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/New_Green_Visa_Card_275X162_(1).webp" alt="" />
                                    </a>
                                    <a href="https://www.hbl.com/personal/cards/credit-cards/hbl-gold-green-credit-card" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/New_Gold_Feul_Credit_Card_275X162_(1).webp" alt="" />
                                    </a>
                                </div>
                                <img className="img-fluid " src="https://www.hbl.com/assets/home-webp/hbl-card-home-day.webp" alt="" />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-debit" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div id='app_konnect' className='container'>
                                <div className="container my-5">
                                    <a href="https://www.hbl.com/personal/cards/debit-cards/hbl-world-debitcard" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/hbl_world_debit_card_257X1621.webp" alt="" />
                                    </a>
                                    <a href="https://www.hbl.com/personal/cards/debit-cards/hbl-gold-debit-card" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/hbl_gold_debit_card_257X1621.webp" alt="" />
                                    </a>
                                    <a href="https://www.hbl.com/personal/cards/debit-cards/hbl-classic-debitcard" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/hbl_debit_Master_card_257X1621.webp" alt="" />
                                    </a>
                                    <a href="https://www.hbl.com/personal/cards/debit-cards/hbl-classic-debitcard" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid my-1 " src="https://www.hbl.com/assets/home-webp/hbl_Union_debit_card_257X1621.webp" alt="" />
                                    </a>
                                </div>
                                <img className="img-fluid " src="https://www.hbl.com/assets/home-webp/hbl-debit-card.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
