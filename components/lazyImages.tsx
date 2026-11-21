import Image from "next/image";
import type { LazyImage } from "@/data/projects";

interface Props {
  images: LazyImage[];
}

export default function LazyImages({ images }: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-4 pb-10">
      {images.map(({ url, altText }) => (
        <Image
          key={url}
          className="h-auto w-full max-w-[1920px] object-contain"
          src={url}
          alt={altText}
          width={1920}
          height={1080}
          sizes="(max-width: 1920px) 100vw, 1920px"
          loading="lazy"
        />
      ))}
    </div>
  );
}
