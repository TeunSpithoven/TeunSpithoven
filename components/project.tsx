import Image from "next/image";
import NavButton from "./navButton";

export default function Project({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="h-screen px-4 md:px-20 lg:px-40 pt-10 md:pt-0">
      <NavButton text="👈Projects" href="/projects" />
      <div
        className={
          "flex flex-col gap-4 items-center justify-start pt-4 md:px-20 lg:px-30 xl:px-40 md:pt-0 md:justify-center h-full font-bold text-6xl"
        }
      >
        <h3 className="font-semibold font-sans text-3xl">{title}</h3>
        <p className={"text-xl"}>{description}</p>
        {image && (
          <Image src={image} alt="project image" width={500} height={500} />
        )}
      </div>
    </div>
  );
}
