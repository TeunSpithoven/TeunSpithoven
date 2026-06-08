import Link from "next/link";

export default function ProjectLink({
  name,
  href,
  classNames,
}: {
  name: string;
  href: string;
  classNames?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "font-mono subpixel-antialiased transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 bg-white text-black border border-black rounded-md px-4 py-3" +
        (classNames ? " " + classNames : "")
      }
    >
      {name}
    </Link>
  );
}
