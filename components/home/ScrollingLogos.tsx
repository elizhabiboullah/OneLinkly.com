"use client";
import { LOGOS } from "@/config/logos";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingLogos = () => {
  const { theme } = useTheme();
  return (
    <section className="mx-auto w-full md:max-w-5xl lg:max-w-7xl px-0 md:px-6 lg:px-8 pt-16 pb-24">
      <Marquee direction="left" autoFill>
        {LOGOS.map((image, index) => (
          <div className="mx-8 text-gray-500" key={index}>
            <Image
              src={image.image}
              alt={image.name}
              width={180}
              height={180}
              style={{
                objectFit: "cover",
                borderRadius: "8px"
              }}
              className="hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingLogos;
