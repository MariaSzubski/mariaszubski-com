import React from "react"

const DateIcon = props => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path fill="#FC978C" d="M2 3h14v2.5H2z" />
    <path fill="#F3695A" d="M15.5 3.5v11h-13v-11h13m1-1h-15v13h15v-13z" />
    <path fill="#F3695A" d="M6.5 7.5h1v1h-1z" />
    <path fill="#F3695A" d="M5 .5h1v2H5zM12 .5h1v2h-1z" />
    <path
      fill="#FC978C"
      d="M8.5 7.5h1v1h-1zM6.5 9.5h1v1h-1zM8.5 9.5h1v1h-1zM6.5 11.5h1v1h-1zM8.5 11.5h1v1h-1zM12.5 7.5h1v1h-1zM12.5 9.5h1v1h-1zM12.5 11.5h1v1h-1zM4.5 7.5h1v1h-1zM4.5 9.5h1v1h-1zM4.5 11.5h1v1h-1zM10.5 7.5h1v1h-1zM10.5 9.5h1v1h-1zM10.5 11.5h1v1h-1z"
    />
  </svg>
)

const LocationIcon = props => (
  <svg viewBox="0 0 16 18" width="1em" height="1em" {...props}>
    <path
      fill="#F3695A"
      d="M8 1.2a5.844 5.844 0 015.8 5.873c0 1.848-2.391 4.53-4.137 6.489-.669.751-1.225 1.382-1.663 1.938-.438-.553-.994-1.184-1.664-1.935C4.591 11.6 2.2 8.921 2.2 7.073A5.844 5.844 0 018 1.2M8 0a7.037 7.037 0 00-7 7.073C1 10.977 8 16.124 8 18c0-1.876 7-7.023 7-10.927A7.038 7.038 0 008 0z"
    />
    <path
      fill="#FC978C"
      d="M8 5a2 2 0 11.001 3.999A2 2 0 018 5m0-1a3 3 0 100 6 3 3 0 000-6z"
    />
  </svg>
)

const WorkshopIcon = props => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path fill="#F3695A" d="M2 3h1v8.999H2zM15 3h1v8.999h-1z" />
    <path
      fill="#FEC52E"
      d="M16.3 2h-5.8a.5.5 0 000-1h-3a.5.5 0 000 1H1.7a.7.7 0 100 1.4h14.6a.7.7 0 100-1.4zM16.3 11.599H1.7a.7.7 0 10-.001 1.4H8.3v.894l-3.147 1.8a.699.699 0 10.682 1.222l.012-.007L9 15.098l3.152 1.8a.7.7 0 00.695-1.217L9.7 13.892v-.894h6.6a.7.7 0 000-1.399z"
    />
  </svg>
)

export { DateIcon, LocationIcon, WorkshopIcon }
