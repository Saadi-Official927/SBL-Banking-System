import React, { useState } from 'react'

function Deposit_Balance(props) {
  const host = "http://localhost:8000"

  const [deposit, setDeposit] = useState({ cash: '' })

  const bankOfSecretPasswordUser = []
  const [Cash, setCash] = useState(bankOfSecretPasswordUser)

  const addCash = async (cash) => {
    // TODO API
    const response = await fetch(`${host}/bank/depositcash`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ cash }),
    });
    const json = await response.json();
    console.log(json)

    // Logic to Add Notes in Client
    const bank = json
    setCash(Cash.concat(bank))
  }

  const addCashClick = (e) => {
    e.preventDefault()
    addCash(deposit.cash)
    alert('Error', 'Follow the Instructions')
    setDeposit({ cash: '' })
  }
  const onChange = (e) => {
    // let value = e.target.value
    // value = value.replace(/[^0-9]/g, '')
    // value = value.replace(/\D/g, "")
    // value = value.replace(/(\d)(\d{2})$/, "$1. $2")
    // value = value.replace(/(?=(\d{3})+(\D))\B/g, "," )
    // e.target.value= value
    setDeposit({ ...deposit, [e.target.name]: e.target.value })
  }
  return (
    // minLength={5} required   ===> it will work only on  onSubmit button in form, but we used onClick function and handled by JS 
    <>
      <div className="container">
        <h1 className='text-center' >Add Cash</h1>
        <form className='container my-3 col-md-5 mb-5'>
          <div className="mb-3">
            <label htmlFor="cash" className="form-label">Enter Cash Amount</label>
            <input type="number" className={`form-control`} id="cash" name='cash' placeholder={'Cash Amount'} onChange={onChange} value={deposit.cash} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={addCashClick}>Add Cash</button>
        </form>
      </div>
    </>
  )
}

export default Deposit_Balance