"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
const Home = () => {
  const [typeEffect, setTypeEffect] = useTypewriter({
    words: [
      "Software Engineer",
      "full Stack Developer",
      "React.js Developer",
      "Next.js Developer",
    ],
    loop: true,
    deleteSpeed: 50, // Set the speed to delete characters
    typeSpeed: 100, // Set the speed to type characters
    delaySpeed: 2000, // Set the delay between words
  });

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className=" text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              {" "}
             {`Hello I'm`} 
              <br />
              <span className="text-accent">Rimsha Amin</span>
            </h1>
            <h2 className="h3 mb-6">
              {`I'm`} <span className="text-accent">{typeEffect}</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-xl text-white/80">
              {`I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js, and
              Next.js.`}
            </p>
            {/* butn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className=" uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
          items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/* <Image src={'/rimsha2.jpeg'} alt="rimsha" width={250} height={250} className="rounded-full"/> */}
            <Photo />
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Home;
