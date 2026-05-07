import React from 'react'
import { Img, Text } from 'components';

const TemplateSidebar = (props) => {
  const { UITemplateList, updateSelectedUITemplate, SelectedUITemplate } = props;
  return (
    <>
      <div className= "w-[230px] bg-gray_901 shrink-[0] grow-[0] flex flex-col justify-start items-start gap-4 py-4 px-2 h-[100%] rounded-[14px]">
        <Text
          className={`font-normal not-italic text-gray_50 text-left w-[auto] overflow-hidden`}
          as="h6" variant="h6"
        >
          Theme Gallery
        </Text>
        <div className= {`items-start w-[100%] gap-2 flex flex-col justify-start overflow-y-auto h-[auto]`}>
          {UITemplateList?.length > 0 && UITemplateList?.map((item) => {
            return (
              <div
              className={`${SelectedUITemplate?.TemplateId === item?.TemplateId ? "bg-primary" : "bg-gray_901"
              } flex items-center justify-start rounded-[4px] w-[100%] gap-2 cursor-pointer p-1`}
              key={item.TemplateId}
              onClick={() => updateSelectedUITemplate(item)}
              >
              <Img
                  src={item?.IconUITemp}
                  className="h-[24px] rounded-[50%] w-[24px] object-contain"
                  alt="imageSixtyTwo_Two"
              />
              <Text
                  className={`font-normal not-italic text-gray_50 text-left w-[auto] overflow-hidden`}
                  variant="body2"
              >
                  {item?.TemplateName}
              </Text>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default TemplateSidebar