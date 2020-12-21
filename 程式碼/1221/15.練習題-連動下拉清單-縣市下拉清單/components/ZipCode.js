import React, { useState } from 'react'
import { countries, townships, postcodes } from '../data'

function ZipCode() {
  console.log(countries)
  console.log(townships)
  const [country, setCountry] = useState(-1)

  return (
    <>
      <h1>台灣郵遞區號連動式下拉表單元素</h1>
      <select
        value={country}
        onChange={(event) => {
          setCountry(+event.target.value)
        }}
      >
        <option value={-1}>請選擇縣市</option>

        {countries.map((v, i) => (
          <option value={i}>{v}</option>
        ))}
      </select>
    </>
  )
}

export default ZipCode
