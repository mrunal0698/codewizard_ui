import { useAuth0 } from "@auth0/auth0-react";

import { StartSubscription } from "shared/common";
import { FeatureList } from ".";
import { Button, Text } from "components";

const features = [
  [
    "Single template",
    "Spring-Odata, Postgres, Maven",
    "Model Library with few models",
    "Documentation",
    "Github integration, download code zip",
    "Discord code-wizard community support"
  ],
  [ 
    "Multiple templates - from Seasoned Developers, Following Best Practices in the Industry",   
    "Spring-Odata, Postgres, Maven",   
    "Model Library with multiple models",    
    "Support for Mysql, Gradle, Spring-Security &amp; JBoss",   
    "Support from Dev Team",  
    "Documentation",   
    "Deploy on cloud",   
    "Github integration, download code zip"
  ] ,
  [ 
    "Multiple templates - from Seasoned Developers, Following Best Practices in the Industry",   
    "Spring-Odata, Postgres, Maven",   
    "Model Library with multiple models",    
    "Support for Mysql, Gradle, Spring-Security &amp; JBoss",   
    "Support from Dev Team",  
    "Documentation",   
    "Deploy on cloud",   
    "Github integration, download code zip"
  ] 
]

const Component = (props) => {
  const { stanadardRef, professionalRef, planListToShow, updateSubscriptionStatus } = props;

  const { user } = useAuth0();

  const handleScroll = (planName) => {
    switch(planName) {
      case 'Gold Plan': 
        stanadardRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Diamond Plan' :
        professionalRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Platinum Plan' : 
        professionalRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        stanadardRef.current?.scrollIntoView({ behavior: 'smooth' });
        break; 
    }
  }
  
  const subscribeHandler = async (planInfo) => {
    await StartSubscription(user,updateSubscriptionStatus,planInfo); 
  }

  return (
    <div className="flex justify-center flex-wrap gap-7 w-[100%]">
      {planListToShow.map((x,idx) => {
        return(
          <div className="bg-secondary flex justify-start items-center flex-col gap-4 w-[360px] p-8 rounded-md h-[auto]" key={idx}>         
            <Text className="font-bold text-left leading-[150%] text-core"
              variant="h2"
              as="h2"
            > 
              $ {x.Price}          
              <span className="text-sm font-normal text-hint" >{x.RecurrenceType === "Monthly" ? "month" : "year"} </span>
            </Text> 
            <Text className="font-medium text-left leading-[150%] text-primary"
              variant="h6"
              as="h6"
            >
              {x.Name}
            </Text> 
            {/* <Text className="font-normal text-center text-hint leading-7"
              variant="body2"
            >
              {x.PlanDescription}
            </Text>  */}
            <Button className="bg-primary text-sm font-medium text-core rounded-md p-4 w-60"
              onClick={() => subscribeHandler(x)}
            >
              Subscribe Now
            </Button>
            <FeatureList features={features[idx]}/>
          </div>
        )
      })}
    </div>
  );
}

export default Component;