import React from "react";

const ImageProduct = ({ id, imgSrc, altText, register }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="item">
        <div className="form__radio__wrapper d-flex align-items-center">
          <input
            name="cake"
            id={id}
            {...register("selectedProduct", {
              validate: (value) => !!value || "Field is required",
            })}
            type="radio"
            value={id}
          />
          <label htmlFor={id} className="pr-3">
            <img
              src={imgSrc}
              alt={altText}
              className="img-fluid img__item pl-3"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageProduct;
