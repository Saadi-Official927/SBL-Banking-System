import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import All_Cards_Images from '../../Components/All_Cards_Images'
import AppTabs from '../../Components/AppTabs'
import Cards from '../../Components/Cards'
import Card_Tabs from '../../Components/Card_Tabs'
import Footer_mainPage from '../../Components/Footer_mainPage'
import Icon_link from '../../Components/Icon_link'
import Navbar from '../../Components/Navbar'
import Ranges_loan from '../../Components/Ranges_loan'
import { incrementByAmount, decrement, increment } from './counterSlice'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login_Page from '../../Components/Login_Page'
import Navbar_below_component from '../../Components/Navbar_below_component'
import Footer_Above from '../../Components/Footer_Above'
import Footer_Login from '../../Components/Footer_Login'
import Navbar_login from '../../Components/Navbar_login'
import AtmMachine from '../../Components/AtmMachine'
import Deposit_Balance from '../../Components/Deposit_Balance'
import Balance_Checking from '../../Components/Balance_Checking'



export function Counter() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('0');

  const [incrementCarPrice, setincrementCarPrice] = useState('0');
  const [incrementPersonalPrice, setincrementPersonalPrice] = useState('0');
  const [incrementMonth, setIncrementMonth] = useState('0');

  const increamentByClick = () => {
    dispatch(increment())
  }
  const decreamentByClick = () => {
    dispatch(decrement())
  }
  const incrementByAmountFunction = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0))
  }


  const changingCarValues = (e) => {
    setincrementCarPrice(e.target.value)
  }
  const changingMonthValues = (e) => {
    setIncrementMonth(e.target.value)
  }
  const changingPersonalValues = (e) => {
    setincrementPersonalPrice(e.target.value)
  }
  const changingValues = (e) => {
    setIncrementAmount(e.target.value)
  }
  const changingValuesForDeposit = (e) => {
    // let value = e.target.value
    // value = value.replace(/[^0-9]/g, '')
    // value = value.replace(/\D/g, "")
    // value = value.replace(/(\d)(\d{2})$/, "$1. $2")
    // value = value.replace(/(?=(\d{3})+(\D))\B/g, ",")
    // e.target.value = value
    setIncrementAmount(e.target.value)
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Navbar count={count} />
              <Navbar_below_component />
              <AppTabs />
              <Cards />
              <Card_Tabs />
              <Ranges_loan
                increamentByClick={increamentByClick} decreamentByClick={decreamentByClick} count={count}
                incrementByAmountFunction={incrementByAmountFunction}
                changingCarValues={changingCarValues} incrementCarPrice={incrementCarPrice}
                changingMonthValues={changingMonthValues} incrementMonth={incrementMonth}
                changingPersonalValues={changingPersonalValues} incrementPersonalPrice={incrementPersonalPrice}
              />
              <All_Cards_Images />
              <Icon_link />
              <Footer_Above />
              <Footer_mainPage />
            </React.Fragment>
          } />
          <Route path='/login' element={
            <React.Fragment >
              <Navbar_login />
              <Login_Page />
              <Footer_Login />
            </React.Fragment>
          } />
          <Route path='/deposit-the-balance' element={
            <React.Fragment >
              <Navbar_login />
              <AtmMachine />
              <Deposit_Balance />
              <Footer_Login />
            </React.Fragment>
          } />
          <Route path='/check-the-balance' element={
            <React.Fragment >
              <Navbar_login />
              <AtmMachine />
              <Balance_Checking increamentByClick={increamentByClick} decreamentByClick={decreamentByClick} count={count}
                incrementByAmountFunction={incrementByAmountFunction} incrementAmount={incrementAmount}
                changingValuesForDeposit={changingValuesForDeposit} />
              <Footer_Login />
            </React.Fragment>
          } />
        </Routes>
      </Router>
    </>
  )
}