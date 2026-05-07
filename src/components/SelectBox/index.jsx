import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { ErrorMessage } from "../ErrorMessage";
import Helper from 'shared/helper';

const styles = {
  container: (provided) => ({
    ...provided,
    zIndex: 0,
  }),
  control: (provided, state) => ({
    ...provided,
    padding: '10px 12px',
    borderColor: state.isFocused ? '#959595' : '#4e4e4e',
    '&:hover': {
      borderColor: state.isFocused ? '#959595' : '#4e4e4e',
    },
    boxShadow:"none",
    backgroundColor: "transparent",
  }), 
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected && "#fff !important",
    backgroundColor: state.isSelected && "#016CD9 !important",
    "&:hover": { backgroundColor: "#0C57A2", color: "#fff" },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "inherit",
  }),
  input: (provided) => ({
    ...provided,
    color: "inherit",
    margin: "0",
    padding: "0",
    // height: "0",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    paddingTop: "0px",
    paddingBottom: "0px",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: "0",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    padding: "0",
  }),
  menuPortal: (base) => ({ ...base, zIndex: 999999}),
  placeholder: (base) => ({
    ...base,
    margin: 0,
    
  }),
}

const mapOptions = (options, valueKey, labelKey) => {
  if (Array.isArray(options) && options.length > 0) {
    return options.map(option => {
      // Check if the option is a string
      if (typeof option === 'string') {
        return {
          value: option,
          label: option
        };
      }

      if (typeof option === 'object' && valueKey && labelKey) {
        return {
          value: option[valueKey],
          label: option[labelKey]
        };
      }

      return option;
    });
  }
  return options;
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select option",
      className = "",
      options,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value = "",
      errors = [],
      indicator,
      name,
      valueKey = "value",
      labelKey = "label", 

      ...restProps
    },
    ref
  ) => {
      const handleChange = (data) => {
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(name,data);
      }
    };

    const customOptions = mapOptions(options, valueKey, labelKey);
 
    return (
      <>
        <Select
          ref={ref}
          options={customOptions}
          className={className}
          placeholder={
            <div className={`font-normal not-italic p-[0] text-[12px] text-hint text-left ${placeholderClassName}`}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          onChange={handleChange}
          styles={styles}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          value={isMulti ? value || [] : (!Helper.IsNullValue(value) ? customOptions.find(opt => opt.value === value) : null)}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  options: [],
  name: "",
  onChange: () => {},
};
export { SelectBox };
