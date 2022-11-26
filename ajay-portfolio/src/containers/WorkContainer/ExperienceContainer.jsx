import React from "react";
import SingleExperience from "./SingleExperience";

export const ExperienceData = [
  {
    id: "01",
    title: "Frontend Developer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
  {
    id: "02",
    title: "Website Design",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
  {
    id: "03",
    title: "SEO",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui?",
  },
];

const ExperienceContainer = () => {
  return (
    <div className='experience-container'>
      {ExperienceData.map((singleExperience) => {
        return (
          <SingleExperience
            key={singleExperience.id}
            singleExperience={singleExperience}
          />
        );
      })}
    </div>
  );
};

export default ExperienceContainer;
