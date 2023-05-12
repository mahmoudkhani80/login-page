import React, { useState } from "react";
import SubmitButton from "./Submit";
function Radio(props) {
  const [option, setOption] = useState(null);

  const handleOption = (event) => {
    const value = event.target.value;
    setOption(value);
  };
  // <SubmitButton option={option}/> 
  // console.log(option);
  return (
    <div>
      
      <p className="grey-text">Looking for?</p>
      <div className="radio-container">
        <div className="radio-buttons grid-for-radio">
          <input
            type="radio"
            name="look"
            value={props.project}
            checked={option === "project"}
            onChange={handleOption}
          />
          <label>Project</label>
        </div>
        <div className="radio-buttons grid-for-radio">
          <input
            type="radio"
            name="look"
            value={props.design}
            checked={option === "design"}
            onChange={handleOption}
          />
          <label>Design</label>
        </div>
      </div>
    </div>
  );
}
export default Radio;
