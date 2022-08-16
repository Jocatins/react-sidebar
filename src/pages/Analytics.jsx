import React, { useState } from 'react'

const Analytics = () => {
  const [trueValue, setTrueValue] = useState(true)
  const [falseValue, setFalseValue] = useState(true)

  const onChangeBooleanValue = (value) => {
    if(value === "true"){
      if(trueValue === true){
        console.log(value, "true value")
      }
      setTrueValue(!trueValue)
    }
    if(value === 'false'){
      if(falseValue === true){
        console.log(value, "false value");
      }
      setFalseValue(!falseValue)
    }
  }

  return (
    <>
    <div>Analytics
<input type="checkbox" value={true} onChange={() => onChangeBooleanValue('true')}/>
<input type="checkbox" value={true} onChange={() => onChangeBooleanValue('false')}/>

    </div>
    </>
  )
}

export default Analytics