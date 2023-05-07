import React from 'react'

export default function Footer_Above() {
    return (
        <>
            <div className='container-fluid my-5' id='footer_line' data-aos='fade'></div>
            <div className="container my-5" data-aos='fade'>
                <h3 className='text-success'><strong>WRITE TO US</strong></h3>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control p-3" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control p-3" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
                <div className="form-floating my-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option value="1">Querry</option>
                        <option value="2">Suggestion</option>
                        <option value="3">Complain</option>
                    </select>
                    <label for="floatingSelect">Works with selects</label>
                </div>
                <div className="form-floating my-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
            </div>
        </>
    )
}
