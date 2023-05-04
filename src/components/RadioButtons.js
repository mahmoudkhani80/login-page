function Radio() {
  return (
    <div>
      <p className="grey-text">Looking for?</p>
      <div className="radio-container">
        <div className="radio-buttons grid-for-radio">
          <input type="radio" name="look"/><label>Project</label> 
        </div>
        <div className="radio-buttons grid-for-radio">
          <input type="radio" name="look"/><label>Design</label>
        </div>
      </div>
    </div>
  );
}
export default Radio;
