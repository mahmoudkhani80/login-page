import { useState } from "react";

function TagsInput(props) {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";

  }

  function removeTag(index) {
    
    setTags(tags.filter((el, i) => i !== index));
  }
  console.log(tags);
  return (
    <div className="input-layout">
      <strong className="grey-text">Select Skills</strong>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="border-for-inputs"
        placeholder="Enter your skills"
        onChange={props.tagsInput}
      />
      <div className="tags-input-container">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
      </div>
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
}
export default TagsInput;
