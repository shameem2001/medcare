import React from 'react'

export default function Dashcomponent({name,department,email,phoneNumber}) {
  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{department}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
        <th>
          <button className="btn actionbutton">Remove</button>
        </th>
      </tr>
    </div>
  )
}
