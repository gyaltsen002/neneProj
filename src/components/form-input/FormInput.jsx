import React from "react";

const FormInput = function (props) {
  const { divClass, inputClass } = props.styleClasses;
  const type = props.type;
  const labelHeading = props.labelHeading;
  const inputValue = props.inputValue;
  const handleFormInputChange = props.handleFormInputChange;
  const setUserQuoteCred = props.setUserQuoteCred;

  return (
    <div className={divClass}>
      <label htmlFor={labelHeading}>{labelHeading}</label>
      <textarea
        id={labelHeading}
        className={inputClass}
        type={type}
        name={labelHeading}
        value={inputValue}
        placeholder={labelHeading}
        onChange={(event) => {
          handleFormInputChange(event, setUserQuoteCred);
        }}
      />
    </div>
  );
};

export default FormInput;
