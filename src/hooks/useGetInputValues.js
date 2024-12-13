import { useState } from "react";

const useGetInputValues = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const resetHandler = () => setValues(initialValues);

  return { values, handleChange, resetHandler };
};

export default useGetInputValues;
