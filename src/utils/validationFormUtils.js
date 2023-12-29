const REQUIRED_ERROR_MESSAGE = "This field is required";

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const validateTime = (selectedTime, watch) => {
  const selectedDate = watch("date");
  const currentDate = new Date();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const isTimeValid = selectedTime < currentTime;
  const isTimeNotEmpty = selectedTime !== "";

  if (selectedDate > getTodayDate()) {
    return true;
  }

  if (isTimeValid && isTimeNotEmpty) {
    return "Invalid hour";
  }

  return true;
};

export const validateNotEmpty = (value) =>
  (value && value.trim() !== "") || REQUIRED_ERROR_MESSAGE;
