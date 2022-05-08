import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './App/store'
import ReservationCard from './components/ReservationCard'
import { addReservation } from './features/reservationSlice'
import CustomerCard from './components/CustomerCard'

function App() {
  const [reserveName, setReserveName] = useState('')
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  )
  const customers = useSelector((state: RootState) => state.customer.value)
  const dispatch = useDispatch()

  const handleAddReservation = () => {
    if (!reserveName) return
    dispatch(addReservation(reserveName))
    setReserveName('')
  }
  console.log(customers)
  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => (
                <ReservationCard name={name} index={index} key={index} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input
              value={reserveName}
              onChange={(e) => setReserveName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className='customer-food-container'>
          {customers.map((customer) => (
            <CustomerCard
              id={customer.id}
              name={customer.name}
              food={customer.food}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
