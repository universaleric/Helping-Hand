import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

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

export function AnimatedMulti(props) {
  console.log(props.skills_name);
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      options={props.skills.map(skill => {
        return {value: skill.skills_name, label: skill.skills_name }
      })
        
      }
    />
  );
}
