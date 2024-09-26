"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CarouselProperties from "./carousel-properties";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-screen font-serif-1">
      <header className=" gap-8 h-12 border-b w-full flex items-center flex-row mx-auto shadow-sm bg-white/90 fixed top-0 z-10">
        <div className="max-w-screen-lg mx-auto flex flex-row w-full items-center justify-between">
          <Image
            className="dark:invert opacity-90"
            src="/logo.png"
            alt="Next.js logo"
            width={160}
            height={19}
            priority
          />
          <span>hey</span>
        </div>
      </header>
      <main className="flex flex-col flex-grow items-center  ">
        <Hero />
        <HomeMessage />
        <FeaturedProjects />
        <PropertiesForSale />
      </main>

      <footer className=" h-8  flex gap-6 flex-wrap items-center justify-center my-auto">
        <span>h</span>
      </footer>
    </div>
  );
}
const HomeMessage = () => {
  const refRoot = useRef();
  const refH2One = useRef();
  const refH2Two = useRef();
  const refP2 = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.from(refRoot.current, {
        opacity: 0,
        duration: 1,
        y: 20,
        scrollTrigger: {
          trigger: refRoot.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
      gsap.from(refH2One.current, {
        opacity: 0,
        // duration: 1,
        xPercent: 120,
        scrollTrigger: {
          trigger: refRoot.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
      gsap.from(refH2Two.current, {
        opacity: 0,
        // duration: 1,
        xPercent: -120,
        scrollTrigger: {
          trigger: refRoot.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
      gsap.from(refP2.current, {
        opacity: 0,
        // duration: 1,
        y: -120,
        scrollTrigger: {
          trigger: refP2.current,
          start: "top bottom",
          toggleActions: "restart none none reverse",
        },
        ease: "power4.inAndOut",
      });
    }, refRoot);
    return () => ctx.revert();
  }, [refRoot, refH2One]);
  return (
    <div className="bg-color-1 color-1 w-full min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col gap-16">
        <p
          className="font-sans text-xs uppercase leading-6 tracking-widest"
          ref={refRoot}
        >
          Welcome to Al Habtoor Real Estate
        </p>
        <div>
          <h2 className="text-8xl " ref={refH2One}>
            Unmatched dedication.
          </h2>
          <h2 className="text-8xl " ref={refH2Two}>
            Exceptional value.
          </h2>
        </div>
        <p
          className="max-w-sm mt-8 mx-auto font-sans color-1 text-xs uppercase leading-6 tracking-widest"
          ref={refP2}
        >
          Al Habtoor Real Estate (AHRE) offers a diverse range of properties,
          from modern offices to luxury villas. Since 1993, AHRE has provided
          expert service across the UAE and beyond as part of the Al Habtoor
          Group.
        </p>
      </div>
    </div>
  );
};
const FeaturedProjects = () => {
  return (
    <div className=" w-full py-16 min-h-96 bg-[#f5f3ef]">
      <div className="max-w-screen-lg mx-auto ">
        <h2 className="text-6xl  text-underlined">Featured Projects</h2>

        <div className="flex flex-col gap-32 my-16">
          <Property1 />
          <Property2 />
        </div>
      </div>
    </div>
  );
};

const PropertiesForSale = () => {
  return (
    <div className="  py-5 min-h-96">
      <div className="max-w-screen-lg mx-auto w-full ">
        <div className="pre-title text-xs my-10">Curated Properties</div>
        <h2 className="text-6xl  text-underlined">Properties For Sale</h2>
      </div>
      <CarouselProperties />
    </div>
  );
};

const Property1 = () => {
  return (
    <div className="flex flex-row  justify-start ">
      <div className="image-holder px-8">
        <Image src="/aht_pool2b.jpg" width={600} height={400} alt="" />
      </div>
      <div className="text-holder w-1/3 gap-4 flex flex-col px-8  border-l border-l-black/10">
        <h3 className="text-2xl">Al Habtoor Tower</h3>
        <p className="text-sm font-sans">
          As the latest addition to Al Habtoor City, Al Habtoor Tower offers 82
          stories of exquisite, spacious apartment homes and all-inclusive
          luxury amenities to those longing to live in opulence.
        </p>
        <Link className="text-left text-green-600 text-sm" href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};
const Property2 = () => {
  return (
    <div className="flex flex-row-reverse   justify-start ">
      <div className="image-holder px-8">
        <Image src="/the-residence-grand.jpg" width={600} height={400} alt="" />
      </div>
      <div className="text-holder w-1/3 gap-4 flex flex-col px-8   file:border-r-black/10">
        <h3 className="text-2xl">The Residences</h3>
        <p className="text-sm font-sans">
          Al Habtoor Group’s latest architectural masterpiece is nestled in one
          of the most enchanting locations at Al Habtoor Grand Resort. This
          extraordinary tower graces the Dubai Harbor skyline, offering
          unparalleled access to the sea, airport, and public transportation
          networks. As we stand on the threshold of luxury, we invite you to
          explore this splendid addition to our prestigious portfolio.
        </p>
        <Link className="text-left text-green-600 text-sm" href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <section className="hero w-full">
      <video className="hero-video" autoPlay loop muted>
        <source src="/home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content bg-gradient-to-t from-[#141414] via-transparent to-transparent w-full h-full flex flex-col justify-end">
        <div className="hero-gradient flex flex-col justify-end items-start p-8 gap-4">
          <h1 className="hero-title font-light leading-none">
            Exclusive Properties tailored for your needs
          </h1>
          <p className="hero-description">
            Trusted name in selling, leasing, and management of commercial and
            residential properties.
          </p>
          <Button className="ml-auto gap-4" variant={"secondary"} size={"lg"}>
            Get Started <ArrowRightIcon size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};
