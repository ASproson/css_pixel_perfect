import { Button } from "./Button";
import { Project } from "./projects";

export const Card = ({
  img,
  alt,
  title,
  description,
  link,
  github,
  deployment,
}: Project) => {
  return (
    <div className="bg-white max-w-5xl h-[450px] md:h-[550px] lg:h-[600px] m-4 shadow-md relative rounded-md">
      <div>
        <a href={link} rel="preload" target="_blank">
          <img
            src={img}
            alt={alt}
            className="h-full w-full object-fit max-h-[400px] lg:object-contain"
          />
        </a>
        <div className="mx-6">
          <h1 className="text-lg font-bold my-2">{title}</h1>
          {description}
        </div>
      </div>
      <div className="p-4 mt-auto  absolute bottom-0 w-full">
        <div className="flex justify-between">
          <a href={github} target="_blank">
            <Button text="GitHub" color=" rgb(17, 24, 39)" />
          </a>
          <a href={deployment} target="_blank">
            <Button text="Deployment" color="rgb(59, 130, 246)" />
          </a>
        </div>
      </div>
    </div>
  );
};
