import React from 'react'

function Events (props) {
  return (
    <div className="eventsWrapper">
      {props.events.map(event => (
        <div key={event.name}>
          <a name={event.name} href={event.link} target="_blank" rel="noopener noreferrer">
            <div className="eventBox">
              <h3>{event.name}</h3>
              {event.date.length > 0 && event.time.length > 0 ? <small>{event.date} | {event.time}</small> : <></>}
              {event.date.length === 0 && event.time.length > 0 && <small>{event.time}</small>}
              {event.time.length === 0 && event.date.length > 0 && <small>{event.date}</small>}
              <hr />
              <small>{event.description}</small>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Events
