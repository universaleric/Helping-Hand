import React from "react";
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
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      onChange={props.onChange}
      options={props.skills.map((skill) => {
        return { value: skill.id, label: skill.skills_name };
      })}
    />
  );
}

export function AnimatedSingle(props) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      options={props.skills.map((skill) => {
        return { value: skill.id, label: skill.skills_name };
      })}
    />
  );
}

export function AnimatedSunday(props) {
  return (
    <div>
      <h5>Sunday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}

export function AnimatedMonday(props) {
  return (
    <div>
      <h5>Monday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}

export function AnimatedTuesday(props) {
  return (
    <div>
      <h5>Tuesday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}

export function AnimatedWednesday(props) {
  return (
    <div>
      <h5>Wednesday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}

export function AnimatedThursday(props) {
  return (
    <div>
      <h5>Thursday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}

export function AnimatedFriday(props) {
  return (
    <div>
      <h5>Friday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}

export function AnimatedSaturday(props) {
  return (
    <div>
      <h5>Saturday</h5>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        onChange={props.onChange}
        options={props.times.map((time) => {
          return { value: time.id, label: time.hour };
        })}
      />
    </div>
  );
}
