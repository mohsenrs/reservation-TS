import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './App/store'
import ReservationCard from './components/ReservationCard'
import { addReservation } from './features/reservationSlice'

function App() {
  const [reserveName, setReserveName] = useState('')
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  )
  const dispatch = useDispatch()

  const handleAddReservation = () => {
    if (!reserveName) return
    dispatch(addReservation(reserveName))
    setReserveName('')
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name) => (
                <ReservationCard name={name} />
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
          <div className='customer-food-card-container'>
            <p>Selena Gomez</p>
            <div className='customer-foods-container'>
              <div className='customer-food'></div>
              <div className='customer-food-input-container'>
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
