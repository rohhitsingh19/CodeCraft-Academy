'use client'
import Link from "next/link"
import courseData from "../data/code_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const ButtonGradient = ({ 
    children, 
    href, 
    className = "" 
}: { 
    children: React.ReactNode; 
    href: string; 
    className?: string; 
}) => {
    return (
        <Link 
            href={href}
            className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all rounded-xl group ${className}`}
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-500"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition-all duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white font-semibold">{children}</span>
        </Link>
    )
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-6">{course.description}</p>
                                    <div className="w-full mt-auto">
                                        <ButtonGradient 
                                            href={`/courses`}
                                        >
                                            Learn More
                                        </ButtonGradient>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <ButtonGradient 
                    href="/courses"
                    className="px-8"
                >
                    View All Courses
                </ButtonGradient>
            </div>
        </div>
    )
}

export default FeaturedCourses