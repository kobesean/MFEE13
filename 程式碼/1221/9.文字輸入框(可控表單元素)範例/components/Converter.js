import React, { useState } from 'react'

function Converter(props) {
  //用於輸入值使用的狀態
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      {/* 可控表單元素範例：值(value)對應狀態值(inputValue)，更動方法(onChange)對應狀態設定方法(setInputValue) */}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
    </>
  )
}

export default Converter
