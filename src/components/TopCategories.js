import React from "react";
import Button from "../components/Button";

const TopCathegories = () => {
  const buttons = [
    { name: "Web Dev", color: "yellow" , colorr:"yelloww" },
    { name: "History", color: "yellow" , colorr:"yelloww"},
    { name: "Arts", color: "yellow" , colorr:"yelloww"},
    { name: "Soft skills", color: "yellow" , colorr:"yelloww"},
    { name: "Design", color: "yellow" , colorr:"yelloww"},
    { name: "Psychology", color: "yellow" , colorr:"yelloww"},
    { name: "Science", color: "yellow" , colorr:"yelloww"},
    { name: "Politics", color: "yellow" , colorr:"yelloww"},
  ];
  return (
    <section className="lg:h-[500px] max-lg:h-[800px] w-full bg-greey lg:pl-20 max-lg:p-4 lg:flex  lg:gap-10 xl:gap-32 py-12">
      <div >
      <h1 className="text-black lg:text-4xl max-lg:text-lg font-montserrat font-medium lg:text-start max-lg:text-center mt-22 lg:mr-12">
          <span className="font-caprasimo">Top categories</span>
        </h1>
        <div className="w-96">
        <p className="text-blak lg:text-[20px] max-lg:text-[13px] lg:text-start max-lg:text-center font-montserrat   lg:w-[420px] max-lg:min-w-[300px] max-lg:mx-auto mt-14 mb-16 ">
          With Bright, the limit is the sky as  we put our best to provide you 
          with all possible learning categories from dev to design to 
          history and art, psychology and soft skills, and many other 
          categories in order to keep everything in the reach of your  
          click. Get started now! 
        </p> </div>
        <div className="max-lg:hidden ">
        <Button name={"Browse courses"} color={"yellow"} colorr={"yelloww"} /> 
        </div>
        
      </div>

      
      <div className="grid grid-cols-2 gap-6  h-[310px] lg:w-[600px] max-lg:max-w-[600px] max-lg:mx-auto   lg:mt-10 ml-24  ">
        
        {buttons.map((button , index) => (
          <Button key={index} name={button.name} color={button.color} colorr={button.colorr} />
        ))} 
      </div>
    </section>
  );
};

export default TopCathegories;