import React from 'react'

export default function CityLocation(location) {
    const dateObj = new Date();
    const month = dateObj.getMonth()+1>=10 ? dateObj.getMonth()+1 :'0' + (dateObj.getMonth()+1)
    const day = dateObj.getDay()>=10 ? dateObj.getDay() :'0' + dateObj.getDay()
    const year = dateObj.getFullYear()
    const hour = dateObj.getHours()>=10 ? dateObj.getHours() : '0' + dateObj.getHours()
    const minutes = dateObj.getMinutes()>=10? dateObj.getMinutes() : '0' + dateObj.getMinutes()
  return (
    <div className='city-location flex column'>
    <div className='city-lat-lon flex'>
  <p>latitude {location.lat}</p>
  <p>longitude {location.lon}</p>
    </div>
    <div className='date-accuracy'>
      <p>accurate to {day}/{month}/{year} at {hour}:{minutes}</p>
    </div>

  </div>
  )
}
