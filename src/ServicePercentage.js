// import "./index.css"

export default function ServicePercentage({children, percentage, onSelect}) {
    return(
        <div className="dir">
          <h4>
            {children} 
        </h4>  
        <select value={percentage} onChange={onSelect}>
          <option  value="0">Not satisfied (0%)</option>
          <option  value="5">It was Okay (5%) </option>
          <option  value="10">It was good (10%)</option>
          <option  value="20">Absolutely amazing! (20%)</option>
        </select>
        </div>
    )
}