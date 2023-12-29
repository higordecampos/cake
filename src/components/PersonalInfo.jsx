import React from "react";
import InputField from "./InputField";
import validator from "validator";
import DateInput from "./DateInput ";
import TimeInput from "./TimeInput";
import { useForm } from "react-hook-form";
import { validateTime, validateNotEmpty } from "../utils/validationFormUtils";

function PersonalInfo({ register, errors }) {
  const { control, setValue, trigger, watch } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const rules = {
    validate: {
      validateTime: (value) => validateTime(value, watch),
      validateNotEmpty: validateNotEmpty,
    },
  };

  return (
    <div>
      <h4 className="form__title">Order Information</h4>
      <div className="row align-items-end">
        <InputField
          label="Name"
          hasLabel
          name="name"
          placeholder="First"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
          fieldConfig={{ required: true }}
        />
        <InputField
          label="Last Name"
          name="lastName"
          placeholder="Last"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
          fieldConfig={{ required: true }}
        />
      </div>
      <div className="row">
        <DateInput
          control={control}
          register={register}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        />
        <TimeInput
          label="Preferred delivery time"
          control={control}
          setValue={setValue}
          rules={rules}
        />
      </div>
      <div className="row">
        <InputField
          label="Phone"
          name="phone"
          hasLabel
          placeholder="### ### ####"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
          fieldConfig={{
            required: true,
          }}
        />
        <InputField
          label="E-mail"
          name="email"
          hasLabel
          errors={errors}
          formMethods={{ register, formState: { errors } }}
          fieldConfig={{
            required: true,
            validate: (value) => validator.isEmail(value),
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
