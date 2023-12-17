import Link from "next/link";
import Image from "next/image";
import IntersectionObserverComponent from "./IntersectionObserver";
import urlFor from "@/sanity/sanity.image";
import generateColorPalette from "../utils/colorUtils";
import { Project } from "@/types/Project";
import { ColorPalette } from "./ColorPalette";
import InMomentSpline from "./splines/InMomentSpline";
type ProjectsListProps = {
  projects: Project[];
};

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    // <IntersectionObserverComponent
    //   inViewClass=""
    //   notInViewClass=""
    //   threshold={0.01}
    //   className="project-list transition-transform"
    // >
    <div className="project-list">
      <div className="mx-auto grid grid-cols-1 gap-12 xl:gap-12">
        {projects.map((project: Project, index: number) => {
          //const colorPalette = generateColorPalette(project.color.hex);
          const slugname = project.slug;
          return (
            <div
              key={project._id}
              className={`project-item project-${index + 1} project-${
                project.slug
              }`}
            >
              <Link
                key={project._id}
                href={`/projects/${project.slug}`}
                title={`See my work on ${project.name}`}
                className="group relative"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 "
                    style={{ backgroundColor: project.color?.hex || "#f00" }}
                  ></div>
                  <div className="">
                    {project.image && (
                      <Image
                        src={urlFor(project.image)
                          .width(515)
                          .height(515)
                          .dpr(1.5)
                          .url()}
                        alt={project.name}
                        width={515}
                        height={515}
                        priority={index < 2}
                        sizes="(max-width: 640) 314px, 515px"
                        className="relative z-20 aspect-video w-full object-cover transition-all group-hover:-translate-y-10"
                      />
                    )}
                  </div>
                  {project.svgcode && (
                    <div className="view-actor absolute inset-0 transition-transform delay-[25ms] duration-500 group-hover:-translate-y-[28%] group-hover:duration-300">
                      <div
                        className="svg-parent absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                        dangerouslySetInnerHTML={{
                          __html: project.svgcode.code,
                        }}
                      />
                    </div>
                  )}

                  {project.name === "InMoment.com" ? <InMomentSpline /> : null}
                </div>
                <div className="absolute bottom-2 left-4 z-10">
                  <span className="mt-3 inline-block text-base">
                    <span className="font-bold">{project.name}</span>

                    {project.subtitle && (
                      <span className="font-light opacity-40">
                        &nbsp;-&nbsp;{project.subtitle}
                      </span>
                    )}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
