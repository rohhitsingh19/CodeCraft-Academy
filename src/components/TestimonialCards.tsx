'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const softwareTestimonials = [
    {
      quote:
        'Enrolling in this coding bootcamp transformed my understanding of software development and helped me secure my dream job. The instructors are industry veterans with incredible knowledge!',
      name: 'Alex Johnson',
      title: 'Full Stack Developer',
    },
    {
      quote:
        "The community and support at this academy are unmatched. I've grown not just as a programmer, but as a problem solver, thanks to their comprehensive approach to teaching.",
      name: 'Samantha Lee',
      title: 'Frontend Engineer',
    },
    {
      quote:
        "This program offered me the tools and confidence to transition careers into tech. I'm endlessly grateful for the personalized mentorship that got me through challenging concepts.",
      name: 'Michael Chen',
      title: 'DevOps Specialist',
    },
    {
      quote:
        'Finding the right learning environment was crucial for my growth. This academy matched me with mentors who truly understood my goals and helped overcome technical challenges.',
      name: 'Emily Taylor',
      title: 'Mobile App Developer',
    },
    {
      quote:
        'The cloud computing courses here opened my eyes to the power of scalable architecture. Highly recommend for any aspiring system architects!',
      name: 'Chris Morales',
      title: 'Cloud Solutions Architect',
    },
  ];


function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Code to Success: Developer Journeys</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={softwareTestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards