import React from "react";
import InputField from "./InputField";
import SelectInput from "./SelectInput";

function AddressInfo({ register, errors }) {
  return (
    <div>
      <div className="row">
        <InputField
          label="Andress"
          hasLabel
          col={12}
          name="adress"
          placeholder="Street Address"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
        />
      </div>
      <div className="row">
        <InputField
          name="city"
          placeholder="City"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
        />
        <InputField
          name="region"
          placeholder="Region"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
        />
      </div>
      <div className="row">
        <InputField
          name="zip-code"
          placeholder="Postal / Zip Code"
          errors={errors}
          formMethods={{ register, formState: { errors } }}
        />
        <SelectInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
        />
      </div>
      <div className="row d-flex justify-content-center">
        <button type="submit" className="form__btn  btn btn-lg btn-primary">
          Order
        </button>
      </div>
    </div>
  );
}

export default AddressInfo;
