import React, { useState } from "react";
import SubmitButton from "./Submit";
function Radio(props) {
  const [option, setOption] = useState(null);
  const [OptionerrorMsg, setOptionErrorMsg] = useState('');
  const errorMsg = props.error;
  function handleOption(event) {
    setOption(event.target.value);
    props.option(event.target.value);
  }
  // function isValid(option) {
  //   if (option === null) {
  //     setOptionErrorMsg("please select one option");
  //     return false;
  //   } else {
  //     setOptionErrorMsg('')
  //     return true;
  //   }
  // }

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
            value="project"
            checked={option === "project"}
            onChange={handleOption}
          />
          <label>Project</label>
        </div>
        <div className="radio-buttons grid-for-radio">
          <input
            type="radio"
            name="look"
            value="design"
            checked={option === "design"}
            onChange={handleOption}
          />
          <label>Design</label>
        </div>
        {errorMsg && <p className="error">{errorMsg}</p>}
      </div>
    </div>
  );
}
export default Radio;
