import { Text } from "components";

const Component = ({ msg, className }) => {
    return(
      <div className={`flex justify-center items-center w-[100%] ${className}`}>
          <Text
          className="text-hint text-center w-[auto]"
          variant="body2"
        >
          {msg || "No Data Found"}
        </Text>
      </div>
    )
  }

  export default Component;