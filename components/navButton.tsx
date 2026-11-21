import Link from "next/link";

export default function NavButton({
  text,
  href,
  classNames,
}: {
  text: string;
  href: string;
  classNames?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "fixed left-5 top-5 border-2 border-black dark:border-white dark:bg-black bg-white text-black dark:text-white rounded-full px-2 z-50" +
        " " +
        (classNames || "")
      }
    >
      {text}
    </Link>
  );
}
