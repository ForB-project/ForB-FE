import React, { useState, useCallback } from "react";
interface initialForm {
  [key: string]: string | number;
}
function useInput(initialForm: initialForm) {
  const [inputs, setinputs] = useState(initialForm);
  // change
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setinputs(prev => ({ ...prev, [name]: value }));
    },
    []
  );
  // reset
  const reset = useCallback(() => setinputs(initialForm), [initialForm]);

  return [inputs, onChange, reset, setinputs];
}
export default useInput;
