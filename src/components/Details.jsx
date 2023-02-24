import React from 'react'

const Details = ({ students, live }) => {

  return (
    <div className="details">
      <div className="d-left">
        Total Students :{students.length}
      </div>
      <div className="d-right">
        Present :{live}
      </div>
    </div>
  )
}

export default Details
