import Link from "next/link";

export default function ProjectLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={
        "transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      }
    >
      {name}
    </Link>
  );
}
