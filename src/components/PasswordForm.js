import React from "react";
const PasswordState = {
  Password: "",
  error: "",
};
class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = PasswordState;
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      Password: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <div className="form-group mb-3">
          <label>
            <strong>Password</strong>
          </label>
          <input
            type="password"
            name="password"
            value={this.state.Password}
            onChange={this.onChange}
            className="form-control"
          />
          <span className="text-danger">{this.state.error}</span>
        </div>
        <div className="d-grid">

        </div>
      </div>
    );
  }
}

export default FormComponent;
