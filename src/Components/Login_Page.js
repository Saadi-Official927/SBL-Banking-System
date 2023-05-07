import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login_Page() {
  // CSS

  const [colorBtn1, setColorBtn1] = useState({
    color: 'green',
    backgroundColor: 'white'
  })
  const [colorBtn2, setColorBtn2] = useState({
    color: 'green',
    backgroundColor: 'white'
  })
  const onClickChangingBtn1 = () => {
    if (colorBtn1.color === 'green') {
      setColorBtn1({
        color: 'white',
        backgroundColor: 'green'
      })
      setColorBtn2({
        color: 'green',
        backgroundColor: 'white'
      })
    }
  }
  const onClickChangingBtn2 = () => {
    setColorBtn1({
      color: 'green',
      backgroundColor: 'white'
    })
    setColorBtn2({
      color: 'white',
      backgroundColor: 'green'
    })
  }
  // --------------------------------------------------------------------------------------------------------------
  // JavaScript For LOGIN

  const [credentials, setCredentials] = useState({ debitcard: '', password: '' })
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:8000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ debitcard: credentials.debitcard, password: credentials.password }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // Save the auth token and redirect it
      localStorage.setItem('token', json.JWT_DataToken)
      history("/")
    }
    else {
      alert('Wrong Credentials')
    }
  }
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  // ------------------------------------------------------------------------------------------------------------
  // JavaScript For Register


  const [credentialsSignup, setCredentialsSignup] = useState({ debitcard: '', email: '', password: '', cPassword: '' })



  const handleSubmitSignup = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:8000/auth/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ debitcard: credentialsSignup.debitcard, email: credentialsSignup.email, password: credentialsSignup.password, cPassword: credentialsSignup.cPassword }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // Save the auth token and redirect it
      localStorage.setItem('token', json.authtoken)
    }
    else {
      alert('Wrong Credentials')
    }
  }
  const onchangeSignup = (e) => {
    setCredentialsSignup({ ...credentialsSignup, [e.target.name]: e.target.value })
  }

  return (
    <>

      <div className="container my-5" data-aos='zoom-out'>
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item mx-3">
            <a style={colorBtn1} onClick={onClickChangingBtn1} className="nav-link active" id="pills-register" data-toggle="pill" href="#pills-form-register" role="tab" aria-controls="pills-home" aria-selected="true">Register</a>
          </li>
          <li className="nav-item ">
            <a style={colorBtn2} onClick={onClickChangingBtn2} className="nav-link " id="pills-login" data-toggle="pill" href="#pills-form-login" role="tab" aria-controls="pills-profile" aria-selected="false">Login</a>
          </li>
        </ul>

        <div className="tab-content container my-5" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-form-register" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="container my-3 col-md-5">
              <form onSubmit={handleSubmitSignup}>
                <div class="form-group ">
                  <label for="debitcard">Debit Card Number</label>
                  <input type="number" class="form-control" id="debitcard" name='debitcard' aria-describedby="emailHelp" placeholder="Enter Your Assigned Debit Card Number" onChange={onchangeSignup} value={credentialsSignup.debitcard} minLength={16} required />
                </div>
                <div class="form-group ">
                  <label for="email">Email address</label>
                  <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" onChange={onchangeSignup} value={credentialsSignup.email} required />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="password">Enter Password</label>
                  <input type="password" class="form-control" id="password" name='password' placeholder="Password" onChange={onchangeSignup} value={credentialsSignup.password} minLength={5} required />
                </div>
                <div class="form-group">
                  <label for="cPassword">Confirm Password</label>
                  <input type="password" class="form-control" id="cPassword" name='cPassword' placeholder="Confirm Password" onChange={onchangeSignup} value={credentialsSignup.cPassword} minLength={5} required />
                </div>
                <button type="submit" class="btn btn-success my-2">Submit</button>
              </form>
            </div>
          </div>

          <div className="tab-pane fade" id="pills-form-login" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div className="container my-3 col-md-5">
              <form onSubmit={handleSubmit}>
                <div class="form-group ">
                  <label for="debitcard">Enter Debit-Card Number</label>
                  <input type="number" class="form-control" id="debitcard" name='debitcard' aria-describedby="emailHelp" placeholder="xxxx-xxxx-xxxx-xxxx" onChange={onchange} value={credentials.debitcard} />
                </div>
                <div class="form-group">
                  <label for="password">Enter Your Password</label>
                  <input type="password" class="form-control" id="password" name='password' placeholder="Enter Password" onChange={onchange} value={credentials.password} />
                </div>
                <button type="submit" class="btn btn-success my-2"  >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
