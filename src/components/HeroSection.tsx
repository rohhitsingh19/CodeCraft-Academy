import { Button } from "./ui/moving-border"
import { Spotlight } from "./ui/spotlight-new"
import Link from "next/link"
function HeroSection () {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight />
  <div className="p-4 relative z-10 w-full text-center" >
    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    Learn to Code. Build Your Future.</h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Join our immersive coding courses designed to take you from beginner to pro. 
        Whether you are starting fresh or leveling up, our expert-led programs will help you build real-world projects and kickstart your tech career.
            </p>
            <div className="mt-4">
                <Link href={"/courses"}>
                <div 
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    <Button>
                        Explore courses</Button>
                    </div>
                    </Link>
            </div>
    </div>
    </div>
  )
}

export default HeroSection
