import { Img, Text } from 'components';
import React from 'react';

const list = [
    {
        "Name" : "Chat Bots",
         "Icon" : "images/model/chat-bot.svg"
    },
    {
        "Name" : "Bookings",
         "Icon" : "images/model/appointments-outline.svg"
    },
    {
        "Name" : "Login and Registration",
         "Icon" : "images/model/online-class.svg"
    },
    {
        "Name" : "Payment Gateway",
         "Icon" : "images/model/mobile-payment.svg"
    },
    {
        "Name" : "WhatsApp Integration",
         "Icon" : "images/model/cib_whatsapp.svg"
    },
    {
        "Name" : "Search Interface",
         "Icon" : "images/model/icon-park_search.svg"
    },
    {
        "Name" : "Notification Center",
         "Icon" : "images/model/notification-add-outline.svg"
    },
    {
        "Name" : "Feedback and Survey",
         "Icon" : "images/model/codicon_feedback.svg"
    },
    {
        "Name" : "Profile Settings",
         "Icon" : "images/model/icomoon_profile.svg"
    },
    {
        "Name" : "Media Player",
         "Icon" : "images/model/media-link-outline.svg"
    },
    {
        "Name" : "To Do List",
         "Icon" : "images/model/list-todo.svg"
    },
    {
        "Name" : "Task Manager",
         "Icon" : "images/model/carbon_task-add.svg"
    }
]

const Solutions = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start w-[100%] gap-4 py-6 overflow-x-auto">
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
            These are small functional components solving specific industry problems. These components can be easily plugged-into any project.
         </Text>
       </div>
         <div className='flex w-[100%] gap-8 flex-wrap'>
            {list.map((x,idx) => {
                return(
                    <div 
                        className={`bg-secondary flex flex-col items-center justify-evenly p-3 gap-3 w-60 h-36 rounded-md`} 
                        key={idx}
                    >
                        <Img
                        src={x?.Icon}
                        className="h-14 w-14"
                        alt="image"
                        />
                        <Text
                        className="font-inter text-core text-center w-[auto]"
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

export default Solutions
