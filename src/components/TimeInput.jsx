import React from "react";
import { useForm, Controller } from "react-hook-form";

const TimeInput = ({ label, defaultValue, control, setValue, rules }) => {
  console.log("regras", rules);

  return (
    <div className="form-group col-sm-6 flex-column d-flex">
      <label className="form__label">{label}</label>
      <Controller
        defaultValue={defaultValue}
        name="time"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input
              type="time"
              className={`form-control ${fieldState.error ? "is-invalid" : ""}`}
              {...field}
              onChange={(e) => {
                setValue("time", e.target.value);
                field.onChange(e);
              }}
            />
            {fieldState.error && (
              <p className="error-message">{fieldState.error.message}</p>
            )}
          </>
        )}
        rules={rules}
      />
    </div>
  );
};

export default TimeInput;
