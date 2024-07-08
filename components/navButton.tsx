import Link from "next/link";

export default function dNavButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="absolute w-12 h-12 right-5 bottom-5 border-2 border-black dark:border-white dark:bg-white bg-black text-black dark:text-white rounded-full z-50"
    >
      <span className="flex items-center justify-center w-full h-full rounded-full">{text}</span>
    </Link>
  );
}
