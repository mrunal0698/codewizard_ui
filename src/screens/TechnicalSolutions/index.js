import React, { useState } from 'react';
import { Button, Img, Text } from 'components';

const list = [
    {
        "Name" : "Microservices",
        "values" : [
            {
                "Name" : "Micronaut",
                "Icon" : "images/model/micronaut_img.svg"
            },
            {
                "Name" : "Meteor JS",
                "Icon" : "images/model/meteor_js_img.svg"
            },
            {
                "Name" : "Quarkus",
                "Icon" : "images/model/quarkus_img.svg"
            },
            {
                "Name" : "Nest JS",
                "Icon" : "images/model/next_js_img.svg"
            },
            {
                "Name" : "Vert.x",
                "Icon" : "images/model/vert_x_img.svg"
            },
            {
                "Name" : "Express JS",
                "Icon" : "images/model/express_js_img.svg"
            },
            {
                "Name" : "Koa JS",
                "Icon" : "images/model/koa_js_img.svg"
            }
        ]
    },
    {
        "Name" : "Event Driven Architecture",
        "values" : [
            {
                "Name" : "Spring Boot",
                "Icon" : "images/model/spring_img.svg"
            },
            {
                "Name" : "Kafka",
                "Icon" : "images/model/kafka_img.svg"
            },
            {
                "Name" : "Node JS",
                "Icon" : "images/model/nodejs_img.svg"
            }
        ]
    },
    {
        "Name" : "Reactive Architecture"
    },
]

const TechnicalSolutions = () => {
  const [activeService,setActiveSrevice] = useState(list[0]);
  return (
    <div className="flex flex-1 flex-col items-center justify-start w-[100%] gap-7 py-6 overflow-x-auto">
        <div className="flex items-start justify-start flex-col gap-6 w-[100%]">
            <Text
                className="font-bold not-italic text-core text-left w-[auto]"
                as="h3"
                variant="h3"
            >
                Coming Soon...
            </Text>
            <Text
                className="font-normal not-italic text-core text-left w-[auto]"
                as="h6"
                variant="h6"
            >
                These Architectural Blue Prints are tried and tested using standard reference implementations, best practices and guidelines. Each of them implement an architectural pattern using a specific
                combination of frameworks to solve different industry problems. These pre-tested reference implementations to simplify the development of complex and large software projects which otherwise require in-depth technology skills & experience. 
                Refer Documentation for more details.
            </Text>
        </div>
        <div className="flex flex-row gap-4 items-end justify-start self-stretch w-[auto] border-b-[1px] border-solid border-hint">
            {list.map((x,idx) => {
                return(
                    <Button
                        onClick={() => setActiveSrevice(x)}
                        className={`${activeService?.Name === x.Name ? "text-core border-b-[3px] border-solid border-core" : "text-hint"
                        } cursor-pointer font-medium py-1 text-4 px-2 text-center w-[auto]`}
                         key={idx}
                    >
                    {x.Name}
                    </Button>
                )
            })}
        </div>
        <div className='flex w-[100%] gap-8 flex-wrap'>
            {activeService?.values?.map((x,idx) => {
            return(
                <div 
                    className={`bg-secondary flex flex-col items-center justify-evenly p-3 gap-3 w-60 h-36 rounded-md`}
                    key={idx}
                >
                    <Img
                    src={x?.Icon}
                    className="h-14 w-auto"
                    alt="image"
                    />
                    <Text
                    className="font-inter text-core text-center w-auto"
                    variant="body2"
                    >
                        {x?.Name}
                    </Text>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default TechnicalSolutions;
