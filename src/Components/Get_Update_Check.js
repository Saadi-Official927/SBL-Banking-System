import React from 'react'

function Get_Update_Check(props) {
    const { get, updateEditCash } = props
  return (
    <>
    <div className="container mb-5 col-md-5">
        <h1 className="container my-3">Check Balance</h1>
        <h2 className="text-center border border-succuss text-success ">{get.cash}</h2>
        <small>"{get.Date}"</small>
        <div className="text-center my-3">
          <button onClick={() => { updateEditCash(get) }} type="button" className="btn btn-success col-md-8 ">Transfer Amount</button>
        </div>
      </div>
    </>
  )
}

export default Get_Update_Check