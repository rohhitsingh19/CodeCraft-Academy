"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const softwareCoursesContent = [
    {
      title: 'Accelerate Your Career: A Personal Journey in Software Development',
      description:
        'Embark on a coding journey thats uniquely yours. Our personalized instruction adapts to your individual learning pace, setting the stage for unparalleled growth and innovation. At our tech academy, your career aspirations meet our dedicated mentorship, creating a streamlined path to professional mastery.',
    },
    {
      title: 'Industry-Driven Curriculum',
      description:
        'Our curriculum is designed by industry experts and continuously updated to reflect the latest technologies, frameworks, and best practices. Learn what matters now, not outdated techniques, ensuring you graduate with skills that employers are actively seeking in todays competitive market.',
    },
    {
      title: 'Hands-On Project-Based Learning',
      description:
        'Theory meets practice in our project-based approach. Build a portfolio of real-world applications as you learn, demonstrating your capabilities to potential employers. Each project is carefully crafted to reinforce core concepts while teaching practical implementation skills.',
    },
    {
      title: 'Live Code Reviews & Mentorship',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. Our instructors provide detailed code reviews and one-on-one mentorship sessions to enhance your understanding of software architecture and clean coding practices.',
    },
    {
      title: 'Cutting-Edge Development Tools',
      description:
        'Gain proficiency in the tools that modern developers use daily. From version control systems and CI/CD pipelines to containerization and cloud services, we ensure you are comfortable with the entire development ecosystem, not just coding languages.',
    },
    {
      title: 'Continuous Learning Resources',
      description:
        'With our expansive resource library, community forums, and alumni network, your learning does not stop after course completion. Access lifetime updates to course materials, participate in hackathons, and connect with fellow developers to stay at the forefront of technology trends.',
    },
  ];

function WhyChooseUs() {
  return (
     <StickyScroll content={softwareCoursesContent} />
  )
}

export default WhyChooseUs