import React from "react";

const variantClasses = {
  h1: "sm:text-[38px] md:text-[44px] text-[48px]",
  h2: "sm:text-[28px] md:text-[30px] text-[32px]",
  h3: "sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "text-[20px]",
  h5: "text-[18px]",
  h6: "text-[16px]",
  body1: "text-[156.08px] sm:text-[48px] md:text-[48px]",
  body2: "text-[14px]",
  body3: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
