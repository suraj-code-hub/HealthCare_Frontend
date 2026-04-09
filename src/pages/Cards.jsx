import React from 'react'

// const Cards = (props) => {
//   return (
//     <div className="maincards">
//             <div className="card">
//                 <div className="brandname">{props.brandName}</div>
//                 <div className="brandname">{props.name}</div>
//                 <div className="brandname">{props.email}</div>
//             </div>

//     </div>
//   )
// }
const Cards = ({ brandName, name, email }) => {
  return (
    <div className="card">
        <h3>{brandName}</h3>
        <p>{name}</p>
        <p>{email}</p>
    </div>
  )
}

export default Cards