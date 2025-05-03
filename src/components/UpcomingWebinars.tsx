'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Modern JavaScript Fundamentals',
      description:
        'Dive deep into the fundamentals of modern JavaScript and enhance your development skills.',
      slug: 'modern-javascript-fundamentals',
      isFeatured: true,
    },
    {
      title: 'React Framework Mastery',
      description:
        'Learn advanced React techniques from experienced software engineers.',
      slug: 'react-framework-mastery',
      isFeatured: true,
    },
    {
      title: 'Backend Development with Node.js',
      description:
        'Advanced techniques to master server-side development using Node.js.',
      slug: 'backend-development-nodejs',
      isFeatured: true,
    },
    {
      title: 'Cloud Deployment Essentials',
      description:
        'Get started with cloud deployment with this comprehensive overview.',
      slug: 'cloud-deployment-essentials',
      isFeatured: true,
    },
    {
      title: 'DevOps Best Practices',
      description:
        'Enhance your DevOps workflow with expert tips and strategies.',
      slug: 'devops-best-practices',
      isFeatured: true,
    },
    {
      title: 'Software Testing Automation',
      description:
        'Learn how to implement effective testing strategies for your applications.',
      slug: 'software-testing-automation',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Software Development Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: `/webinars/${webinar.slug}`
              }
            ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link 
            href={"/webinars"}
            className="px-4 py-2 rounded border font-semibold border-neutral-600 text-teal-600 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars