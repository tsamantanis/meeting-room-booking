import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('meeting-room-booking-widget')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

window.MeetingRoomBookingWidget = (elementId) => {
  ReactDOM.createRoot(
    document.getElementById(elementId)
  ).render(
    <App />
  )
}