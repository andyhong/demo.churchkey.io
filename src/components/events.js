import React from 'react'

function Events (props) {
  return (
    <div style={eventsStyle}>
      {props.events.map(event => (
        <div key={event.name} style={eventStyle}>
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            <div style={eventBoxStyle}>
              <h3>{event.name}</h3>
              {/* {event.date === "" && event.time === "" ? <></> : <small>{event.date} | {event.time}</small>} */}
              {event.date === "" && event.time === "" && <></>}
              {event.date !== "" && event.time !== "" && <small>{event.date} | {event.time}</small>}
              {event.date === "" && <small>{event.time}</small>}
              {event.time === "" && <small>{event.date}</small>}
              <hr />
              <small>{event.description}</small>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}

const eventsStyle = {
  marginTop: '1em',
  width: '350px',
}

const eventBoxStyle = {
  marginBottom: '1.5em',
  backgroundColor: '#F2F7F5',
  border: '0.3em solid #00473E',
  padding: '1.25em',
  borderRadius: '35px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  textAlign: 'left',
}

const eventStyle = {
  color: '#00473E'
}

export default Events
