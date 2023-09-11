// import "./index.css"
import { useState } from "react"
import ServicePercntage from "./ServicePercentage"


export default function TheBill () {
  const [enterBill, setEnterBill] = useState("")
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)


  const tip = enterBill * ((percentage1 + percentage2) /2 /100)
  

  function handleReset () {
    setEnterBill("")
    setPercentage1(0)
    setPercentage2(0)
  }
//   const result = setEnter

//  function handleEnter () {
//     setEnter()
//  }
    return (
        <>
        <h2>TIP CALCULATOR </h2>
        <div className="dir">
            <div>
         <label>How much was The Bill?</label>
         </div>
         <div>
        <input value={enterBill}  type="input" onChange={(e) => setEnterBill(Number(e.target.value))} /></div>
        </div>
        <div>
            <ServicePercntage percentage={percentage1} onSelect={(e) => setPercentage1(Number(e.target.value))}>How did you like the service?</ServicePercntage>
            <ServicePercntage percentage={percentage2} onSelect={(e) => setPercentage2(Number(e.target.value))}>How did your friend like the Service?</ServicePercntage>
         {enterBill && <>
            <Output enterBill={enterBill} tip={tip} />
         <Reset onPress={handleReset} /></>}
        </div>
        </>
    )
}


function Output ({enterBill, tip }) {
    return (
        <div>
            <h3>You Pay ${enterBill + tip} (${enterBill} + ${tip} tip)</h3>
        </div>
    )
}

function Reset ({onPress}) {
    return (
        <div>
            <button onClick={onPress}>Reset</button>
        </div>
    )
}