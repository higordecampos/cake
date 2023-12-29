import React from "react";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
  formMethods,
  fieldConfig,
  col = 6,
  hasLabel = false,
}) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  const validationConfig = {
    ...fieldConfig,
  };

  return (
    <div className={`form-group flex-column d-flex col-sm-${col}`}>
      <label className={`form__label ${!hasLabel ? "d-none" : ""}`}>
        {label}
        {fieldConfig?.required ? <span className="text-danger">*</span> : ""}
      </label>
      <input
        className={`form-control ${errors?.[name] ? "is-invalid" : ""}`}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, validationConfig)}
      />
      {errors?.[name]?.type === "validate" && (
        <p className="error-message">{label} is invalid</p>
      )}
      {errors?.[name]?.type === "required" && (
        <p className="error-message"> {label} is required</p>
      )}
    </div>
  );
};

export default InputField;
