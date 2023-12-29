import React from "react";

function Header() {
  return (
    <>
      <div className="container">
        <h1 className="page__title text-center text-sm-left text-md text-sm">
          Cake Order Form
        </h1>
        <h2 className="truncate-text">
          Order your freshly baked cakes made using only the finest quality
          natural ingredients.
        </h2>
        <hr className="my-4"></hr>
      </div>
    </>
  );
}

export default Header;
