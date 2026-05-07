import { Img, Text } from "components";

function Component(props) {
const { features } = props;
return (
  <div className="flex justify-start items-start flex-row self-stretch grow-0 shrink-0 basis-auto pb-4">
    <div className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto w-[100%] gap-3"> 
      {features && features.map((item) => { 
        return(
          <div className="flex items-start justify-start gap-3">
            <Img src="images/check_icon.svg" className="w-7 h-7 p-1"/>
            <Text className="font-normal text-left text-subtle leading-7"
              variant="body2"
            >
              {item}
            </Text> 
          </div>
        )
      })}
    </div>
  </div>
);
}

export default Component;
