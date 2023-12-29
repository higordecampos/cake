import React from "react";
import ImageProduct from "./ImageProduct";

function ProductSelection({ images, register, errors }) {
  return (
    <div>
      <div
        className={` ${
          errors.selectedProduct ? "form-control is-invalid bg-transparent" : ""
        }`}
      >
        <div className="row pb-5">
          {images.map((cake) => (
            <div className="pb-5" key={cake.id}>
              <ImageProduct {...cake} register={register} />
            </div>
          ))}
        </div>
      </div>
      {errors.selectedProduct && (
        <p className="error-message">{errors.selectedProduct.message}</p>
      )}
    </div>
  );
}

export default ProductSelection;
