import React from "react";
import Card from "./Card";

const WhyUs = () => {
  const cards = [
    {
      title: "Validated Certification",
      description: "Our certificates hold significant value as they are endorsed by the governance authorities, ensuring their credibility and recognition.",
    },
    {
      title: "Internship Opportunities",
      description: "We offer valuable internship programs, providing practical experience and bridging the gap between academia and the professional world.",
    },
    {
      title: "Job Opportunities",
      description: "Through our extensive network of partners, we connect learners with potential employment prospects, opening doors to exciting career paths.",
    },
    {
      title: "Top-tier Mentors and Experts",
      description: "Our platform boasts a team of highly accomplished mentors and experts in their respective domains. They bring a wealth of knowledge and experience to guide learners on their educational journey.",
    },
    {
      title: "Engaging Gamification",
      description: "Learning becomes enjoyable and immersive with our gamification approach. We incorporate interactive elements and challenges to make the educational experience both fun and effective.",
    },
    {
      title: "Validated Certification",
      description: "Our certificates hold significant value as they are endorsed by the governance authorities, ensuring their credibility and recognition.",
    },
    {
      title: "Validated Certification",
      description: "Our certificates hold significant value as they are endorsed by the governance authorities, ensuring their credibility and recognition.",
    },
    {
      title: "Validated Certification",
      description: "Our certificates hold significant value as they are endorsed by the governance authorities, ensuring their credibility and recognition.",
    },
    {
      title: "Validated Certification",
      description: "Our certificates hold significant value as they are endorsed by the governance authorities, ensuring their credibility and recognition.",
    },
  ];

  return (
    <section className="p-20">
      <h1 className="text-black lg:text-4xl max-lg:text-lg font-montserrat font-medium lg:text-start max-lg:text-center mt-22 lg:mr-12">
        <span className="font-caprasimo">Why Us ?</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
        {cards.map((card, index) => {
          let marginLeftClass = "lg:ml-24 mb-8";
          if (index >= 3 && index < 6) {
            marginLeftClass = "mb-8";
          } else if (index >= 6) {
            marginLeftClass = "lg:ml-24";
          }
          return (
            <Card key={index} title={card.title} description={card.description} marginLeftClass={marginLeftClass} />
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
