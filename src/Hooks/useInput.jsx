import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const attributes = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, attributes];
};
