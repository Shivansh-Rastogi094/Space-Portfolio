"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { RECENT_PROJECTS } from "@/constants";
import { SectionWrapper } from "@/hoc/section-wrapper";
import { PinContainer } from "@/components/ui/3d-pin";

const RecentProjectsBase = () => {
  return (
    <div className="py-20">
      <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-20 justify-items-center p-4">
        {RECENT_PROJECTS.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] lg:rounded-3xl">
                  {/* Background grid canvas */}
                  <div className="absolute inset-0 h-full w-full overflow-hidden bg-[#13162d]">
                    <Image
                      fill
                      src="/bg.png"
                      alt="bg-img"
                      sizes="(max-w-768px) 80vw, 570px"
                      className="object-cover opacity-40"
                    />
                  </div>

                  {/* Browser Mockup Window */}
                  <div className="w-[90%] h-[85%] z-10 bg-[#0c0d19] rounded-xl border border-white/10 flex flex-col shadow-2xl overflow-hidden transition-transform duration-500 group-hover/pin:scale-[1.02]">
                    {/* macOS Style Window Title Bar */}
                    <div className="h-6 bg-[#16172a] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative flex-1 bg-white overflow-hidden">
                      <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-w-768px) 80vw, 570px"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl text-white">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal text-secondary mt-1">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon: string, i: number) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Image
                          height={40}
                          width={40}
                          src={icon}
                          alt={icon}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-purple md:text-xs lg:text-xl"
                    >
                      Source Code
                    </Link>

                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export const RecentProjects = SectionWrapper(RecentProjectsBase, "projects");
