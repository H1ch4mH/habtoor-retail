"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
const OPTIONS: EmblaOptionsType = { align: "center" };
function CarouselProperties() {
  return (
    <div className="py-16">
      <EmblaCarousel options={OPTIONS} />
    </div>
  );
}

export default CarouselProperties;
type PropType = {
  options?: EmblaOptionsType;
};

const residences = [
  {
    name: "Emirates Oasis Villas",
    image: "/eov6.jpg",
  },
  {
    name: "Al Wasl Village",
    image: "/al-wasl.jpg",
  },
  {
    name: "The Residences",
    image: "/polo-villas.jpg",
  },
];

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.from(Array(6).keys()).map((index) => (
            <div className="embla__slide " key={index}>
              <div className="bg-slate-50 pb-4">
                <Image
                  src={residences[index % 3].image}
                  width={600}
                  height={400}
                  alt=""
                  className="mb-2 rounded-t  object-cover "
                />
                <h3 className="text-2xl px-4">{residences[index % 3].name}</h3>
                <div className="flex flex-row justify-between mt-1 px-4">
                  <p className="font-sans text-sm">FROM 525,000 AED</p>
                </div>
                <Link
                  className="font-ser text-sm  flex flex-row gap-2 items-center mt-4 text-green-600 px-4 "
                  href="#"
                >
                  More Details <ArrowRightIcon size={12} />
                </Link>
              </div>
              {/* <div className="embla__slide__number">{index + 1}</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls"></div>
    </section>
  );
};
