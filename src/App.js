import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import OrderInformationForm from "./components/OrderInformationForm";

function App() {
  return (
    <div className="App container">
      <Header />
      <OrderInformationForm />
    </div>
  );
}

export default App;
