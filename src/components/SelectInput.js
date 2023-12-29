import React from "react";

const SelectInput = ({
  label,
  name,
  defaultValue,
  register,
  errors,
  hasLabel = false,
}) => {
  return (
    <div className="form-group col-sm-6 flex-column d-flex">
      <label className={`form__label ${!hasLabel ? "d-none" : ""}`}>
        {label}
        <span className="text-danger">*</span>
      </label>
      <select
        defaultValue={defaultValue}
        {...register(name, { required: true })}
        className={`customDropdown form-control ${
          errors?.[name] ? "is-invalid" : ""
        }`}
      >
        <option>Country</option>
        <option value="br">Brazil</option>
        <option value="usa">United States</option>
      </select>
      <span className="custom-select-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          height="14px"
          width="14px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 386.257 386.257"
        >
          <polygon points="0,96.879 193.129,289.379 386.257,96.879" />
        </svg>
      </span>
      {errors?.[name]?.type === "required" && (
        <p className="error-message">{`${label} is required`}</p>
      )}
    </div>
  );
};

export default SelectInput;
