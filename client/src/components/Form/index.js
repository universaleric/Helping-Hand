import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
export function Password(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="password" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}

export function DropDown(props) {
  return (
    <div class="row">
      <div class="col-md-12">
        <select class="mdb-select md-form" multiple>
          <option value="" disabled selected>
            Choose your country
          </option>
          <option value="1">USA</option>
          <option value="2">Germany</option>
          <option value="3">France</option>
          <option value="3">Poland</option>
          <option value="3">Japan</option>
        </select>
        <label class="mdb-main-label">Label example</label>
        <button class="btn-save btn btn-primary btn-sm">Save</button>
      </div>
    </div>
  );
}
