import React, { useState } from "react";

import SignupOneSidebarframe529821 from "components/SignupOneSidebarframe529821";
import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const OTPOnePage = () => {
  const [userEnteredOtp, setUserEnteredOtp] = useState({
    value: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const navigate = useNavigate();
  const handleChange = (value1, event) => {
    const numericRegex = /^[0-9\b]+$/;
    if (event.target.value === '' || numericRegex.test(event.target.value)) {
      setUserEnteredOtp((curOtp) => {
        return {
          ...curOtp,
          [value1]: event.target.value,
          value: curOtp.value + event.target.value,
        };
      });
    }else {
      const next = event.target.tabIndex - 1;
      if (next > -1) {
        event.target.form.elements[next].focus();
      }
    }
  
  };

  const validateOtp = (event) => {
    event.preventDefault();
    console.log("OTP got from the user - "+userEnteredOtp.value);
  
  };


  const inputfocus = (inputElement) => {
    console.log(inputElement.key + inputElement.target.value)
    // const numericRegex = /^[0-9\b]+$/;
    // if (!inputElement.target.value === '' || !numericRegex.test(inputElement.target.value)) {
    //   const next = inputElement.target.tabIndex - 2;
    //   if (next > -1) {
    //     inputElement.target.form.elements[next].focus();
    //   }
    // }
    if (inputElement.key === "ArrowLeft") {
      console.log(inputElement.target.tabIndex);
      const next = inputElement.target.tabIndex - 2;
      if (next > -1) {
        inputElement.target.form.elements[next].focus();
      }
    } else if (
      inputElement.key === "Backspace" ||
      inputElement.key === "Delete"
    ) {
      const next = inputElement.target.tabIndex - 2;
      if (next > -1) {
        inputElement.target.form.elements[next].focus();
      }
    } else {
      const next = inputElement.target.tabIndex;
      if (next < 6) {
        // inputElement.target.form.elements[next].focus();
      }
    }
  };

  return (
    <>
      <div className="bg-gray_900 flex flex-col font-inter items-center justify-start mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
        <SignupOneSidebarframe529821 className="flex flex-col md:hidden justify-start md:px-[20px] w-[9%]" />
        <Text
          className="font-semibold mt-[205px] text-center text-gray_50 w-[auto]"
          as="h2"
          variant="h2"
        >
          Verify your email
        </Text>
        <Text
          className="font-normal leading-[150.00%] mt-[5px] not-italic text-center text-gray_501"
          as="h6"
          variant="h6"
        ></Text>
        <form
          onSubmit={validateOtp}
          className="flex flex-col items-center justify-start mb-[235px] mt-[32px] md:px-[20px] md:w-[100%] w-[39%]"
        >
          <div className="flex items-center justify-between w-[100%]">
            <div className="otp-container flex items-center justify-center w-[35%]">
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={userEnteredOtp.otp1}
              onChange={(e) => handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={userEnteredOtp.otp2}
              onChange={(e) => handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={userEnteredOtp.otp3}
              onChange={(e) => handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            </div>
           <div className="otp-container flex items-center justify-center w-[35%]">
           <input
              name="otp4"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={userEnteredOtp.otp4}
              onChange={(e) => handleChange("otp4", e)}
              tabIndex="4"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />

            <input
              name="otp5"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={userEnteredOtp.otp5}
              onChange={(e) => handleChange("otp5", e)}
              tabIndex="5"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp6"
              type="text"
              autoComplete="off"
              className="otpInput"
              value={userEnteredOtp.otp6}
              onChange={(e) => handleChange("otp6", e)}
              tabIndex="6"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
           </div>
          </div>
          <Button
            type="submit"
            className="bg-teal_900 cursor-pointer font-medium mt-[40px] px-[12px] py-[16px] rounded-[4px] text-[16px] text-center text-gray_900 w-[472px]"
          >
            Confirm
          </Button>
        </form>
        <Text
          className="font-medium mt-[18px] text-gray_501 text-left w-[auto]"
          variant="body2"
        ></Text>
      </div>
    </>
  );
};

export default OTPOnePage;
