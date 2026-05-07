import { Button, Text } from "components";

const StandardPlan = [
      {
          Title : "Customizable Template",
          Description : "Dive into development with a template designed for Spring-OData, Postgres, and Maven integration. Streamline your projects with this powerful combination."
       },
       {
        Title : "Robust Model Library",
        Description :  "Access a rich Model Library featuring a minimum of five diverse models. Elevate your application&apos;s structure effortlessly."
       },
       {
        Title : "Community Support on Discord",
        Description :  "Join the vibrant Code Wizard community on Discord for instant support, collaboration, and insights. Connect with fellow developers and tap into a world of shared knowledge."
       },
       {
        Title : "Comprehensive Documentation",
        Description : "Navigate your coding journey with ease using our extensive documentation. From setup to advanced features, find answers to your questions at your fingertips."
       },
       {
        Title : "Github Integration",
        Description :  "Seamlessly integrate with Github to manage your version control and enhance collaboration. Enjoy the convenience of one-click code downloads in a zip file."
       },
       {
        Title : null,
        Description :  "Embark on your coding adventure with our Standard Plan, where every feature is designed to empower your development experience."
       }
    ]
  const ProfessionalPlan = [
      {
        "Title" : "Diverse Templates",
        "Description" : "Expertly crafted templates in React, Spring-OData, Postgres, MySQL, Spring Boot, MongoDB, and OpenUI5, developed by seasoned professionals following industry best practices."
      },
      {
        "Title" : "MySQL Support",
        "Description" : "Seamlessly integrate MySQL into your projects with our robust support."
      },
      {
        "Title" : "Gradle Support",
        "Description" : "Easily manage dependencies and build processes with Gradle support."
      },
      {
        "Title" : "Spring-Security Integration",
        "Description" : "Ensure top-notch security for React, Ruby, and Spring-OData applications with built-in Spring-Security support."
      },
      {
        "Title" : "Comprehensive Spring Security Features",
        "Description" : "Enjoy complete authentication, authorization, and user management capabilities."
      },
      {
        "Title" : "JBoss Compatibility",
        "Description" : "Code Wizard offers support for JBoss, expanding your deployment options."
      },
      {
        "Title" : "Model Library Access",
        "Description" : "Access a library of models to accelerate your development process."
      },
      {
        "Title" : "Dev Team Support",
        "Description" : "Experience a dedicated support team ready to fix any issues you encounter."
      },
      {
        "Title" : "Interactive Forum",
        "Description" : "Engage with a vibrant community. Post questions, share insights, and receive responses from both the Code Wizard team and fellow users."
      },
      {
        "Title" : "Extensive Documentation",
        "Description" : "Navigate your coding journey with ease using our detailed and accessible documentation."
      },
      {
        "Title" : "Github Integration",
        "Description" : "Seamlessly integrate with Github, plus enjoy the convenience of one-click code downloads in a zip file."
      },
      {
        "Title" : "Time-Limited Deployment",
        "Description" : " Deploy your application in &apos;run&apos; mode for a maximum of 30 minutes. If needed, restart the application directly from the projects page."
      },
      
      {
        "Description" : "Embark on your professional coding journey with confidence, supported by a feature-rich plan that caters to your every development need.&quot"
      }
  ]

const Component = (props) => {
  const { professionalRef, stanadardRef } = props;

  const scrollHandler = () => {
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }

  return (
   <>
    <div ref={stanadardRef} className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto mt-10 md:px-5 gap-10 px-10">
      <Text className="font-bold text-left leading-[150%] text-core"
        variant="h3"
        as="h3"
      >
       Standard Plan
      </Text>
      {StandardPlan.map((x,idx) => {
        return(
          <Text key={idx} className="font-bold text-left leading-[150%] text-subtle"
            variant="body2"
          >
            {x.Title && `${x.Title} : `}
            <span className="font-normal text-left leading-[150%] text-subtle">
              {x.Description}
            </span>
          </Text>
        )
      })}
      <Button className="bg-primary text-lg font-medium text-core h-[50px] w-[184px] cursor-pointer mt-8 rounded-md"
       onClick={scrollHandler}
      >
        Get Started
      </Button>
    </div>
    <div ref={professionalRef} className="flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto mt-8 md:px-5 gap-10 px-10">
      <Text className="font-bold text-left leading-[150%] text-core"
        variant="h3"
        as="h3"
      >
        Professional Plan
      </Text>
      {ProfessionalPlan.map(x => {
        return(
          <Text className="font-bold text-left leading-[150%] text-subtle"
            variant="body2"
          >
            {x.Title && `${x.Title} : `}
            <span className="font-normal text-left leading-[150%] text-subtle">
              {x.Description}
            </span>
          </Text>
        )
      })}
      <Button className="bg-primary text-lg font-medium text-core h-[50px] w-[184px] cursor-pointer mt-8 rounded-md"
       onClick={scrollHandler}
      >
        Get Started
      </Button>
    </div>
   </>
  );
}

export default Component;
