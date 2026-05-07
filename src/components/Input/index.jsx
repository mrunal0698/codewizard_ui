import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
import helper from 'shared/helper';

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChangeHandler,
      validateForm,
      updateInputValue,
      activeInputValue,
      value = null,
      defaultValue,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className= {`${wrapClassName} ${activeInputValue === name ? "border-gray_501": "border-gray_801"}`} onFocus={() => updateInputValue(name)}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-none`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onBlur={validateForm}

            { ...(!helper.IsNullValue(defaultValue) && helper.IsNullValue(value) ? { defaultValue: defaultValue } : {}) }
            { ...(!helper.IsNull(value) && helper.IsNullValue(defaultValue) ? { value: value } : {}) }

            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  updateInputValue: ()=>{},
  value: null,
  activeInputValue : "",
  defaultValue:""
};

export { Input };
