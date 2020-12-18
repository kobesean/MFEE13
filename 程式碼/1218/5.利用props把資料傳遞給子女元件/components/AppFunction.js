import React, { useState } from 'react'

function AppFunction(props) {
  //console.log(props)

  const [total, setTotal] = useState(props.initValue)

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default AppFunction
