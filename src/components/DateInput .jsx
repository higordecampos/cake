import React from "react";
import { Controller } from "react-hook-form";

const DateInput = ({ control, register, errors, setValue, trigger }) => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="form-group col-sm-6 flex-column d-flex">
      <div>
        <label className="form__label">Delivery date</label>
        <Controller
          name="date"
          control={control}
          defaultValue={getTodayDate()}
          render={({ field }) => (
            <input
              min={getTodayDate()}
              className={`form-control ${errors?.date ? "is-invalid" : ""}`}
              type="date"
              {...register("date", { required: true })}
              {...field}
              onChange={(e) => {
                setValue("date", e.target.value);
                trigger("time");
              }}
            />
          )}
        />
        {errors?.date?.type === "required" && (
          <p className="error-message">Date is required</p>
        )}
      </div>
    </div>
  );
};

export default DateInput;
