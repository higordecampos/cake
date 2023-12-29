import { React, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

import ProductSelection from "./ProductSection";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";

function OrderInformationForm() {
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const API_URL = "https://jsonplaceholder.typicode.com/posts";

  const imagesProductsMock = [
    { id: "cake1", imgSrc: "./img/cake1.jpg", altText: "cake1" },
    { id: "cake2", imgSrc: "./img/cake2.jpg", altText: "cake2" },
    { id: "cake3", imgSrc: "./img/cake3.jpg", altText: "cake3" },
    { id: "cake4", imgSrc: "./img/cake4.jpg", altText: "cake4" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const toggleModal = (text) => {
    setModalText(text);
    setOpen(!open);
  };

  const onSubmit = (data) => {
    const url = API_URL;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        toggleModal("Order successfully submitted.");
      })
      .catch((error) => {
        console.error("Erro no fetch:", error);
        toggleModal("Error submitting order. Please try again.");
      });
  };

  return (
    <div>
      <Modal
        isOpen={open}
        toggleModal={() => toggleModal("")}
        description={modalText}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="img__title">
          Please choose your favorite cake from among the following:
          <span className="t-danger">*</span>
        </h3>
        <ProductSelection
          images={imagesProductsMock}
          register={register}
          errors={errors}
        />

        <PersonalInfo register={register} errors={errors} />

        <AddressInfo register={register} errors={errors} />
      </form>
    </div>
  );
}

export default OrderInformationForm;
