import React, { useState, useEffect } from 'react'

function AppFunction(props) {
  console.log(props)

  const [total, setTotal] = useState(0)

  // initValue有變動時與初始化時設定一次
  useEffect(() => {
    setTotal(props.initValue)
  }, [props.initValue])

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
