import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Get_Check_Balance from './Get_Check_Balance'

function Balance_Checking(props) {

    const { increamentByClick, decreamentByClick, count, incrementByAmountFunction, incrementAmount, changingValuesForDeposit } = props

    const history = useNavigate()
    const host = "http://localhost:8000"
    const bankOfSecretPasswordUser = []
    const [Cash, setCash] = useState(bankOfSecretPasswordUser)
    const [on, setOn] = useState('false')
    // Get Cash
    const getCash = async () => {
        // TODO API
        const response = await fetch(`${host}/bank/fetchData`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json)
        setCash(json)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getCash()
        }
        else {
            history("/login")
        }
    }, [])
    // ----------------------------------------------------------------------------------------------------------------------------
    // Edit and Update Cash
    const [EditCash, setEditCash] = useState({ id: "", cash: '' })


    const updateEditCash = (currentCash) => {
        // ref.current.click()
        setEditCash({ id: currentCash._id, cash: currentCash.cash })
        setOn('true')
    }
    const updateCashClick = (e) => {
        // ref.current.click()
        editCash(EditCash.id, EditCash.cash)
    }

    const x = (EditCash.cash + count)
    const onChange = (e) => {
        // let value = e.target.value
        // value = value.replace(/[^0-9]/g, '')
        // value = value.replace(/\D/g, "")
        // value = value.replace(/(\d)(\d{2})$/, "$1. $2")
        // value = value.replace(/(?=(\d{3})+(\D))\B/g, ",")
        // e.target.value = value
        setEditCash({ ...EditCash, [e.target.name]: e.target.value })
    }

    // Edit a Note
    const editCash = async (id, cash) => {
        // TODO API
        const response = await fetch(`${host}/bank/updatecash/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ cash }),
        });
        const json = await response.json();
        console.log(json)

        let newBank = JSON.parse(JSON.stringify(Cash))
        // Logic to edit Notes in Client
        for (let index = 0; index < newBank.length; index++) {
            const element = newBank[index];
            if (element._id === id) {
                newBank[index].cash = cash
                break
            }
        }
        setCash(newBank)
    }

    return (
        <>
            <div className="container">
                <div className={`mb-3 ${on === 'false' ? 'd-none' : ''} `}>
                    <label htmlFor="addAmount" className="form-label">Deposit Cash</label>
                    <input type="number" className="form-control" id="addAmount" name='addAmount' aria-describedby="emailHelp" onChange={changingValuesForDeposit} placeholder='Add Cash to Account' />
                    <button onClick={incrementByAmountFunction} type="button" className="btn btn-primary my-2">Deposit Cash</button>
                </div>
                <div className={`mb-3 ${on === 'false' ? 'd-none' : ''} `}>
                    <input  type="number" className="form-control" id="cash" name='cash' aria-describedby="emailHelp" placeholder={`Enter total Amount to Deposit ${x} `}  onChange={onChange} />
                    <button onClick={updateCashClick} type="button" className="btn btn-primary my-2">Update Cash</button>
                </div>
            </div>
            <div className="container ">
                <div className="container row mx-3 ">
                    <h5 className='text-center'> {Cash.length === 0 && "No Cash "}</h5>
                    {Cash.map((get) => {
                        return <Get_Check_Balance updateEditCash={updateEditCash} get={get} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Balance_Checking