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
      className="absolute left-5 md:left-20 top-5 md:top-20 border-2 border-black dark:border-white dark:bg-black bg-white text-black dark:text-white rounded-full px-2"
    >
      {text}
    </Link>
  );
}
