import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 h-screen">
      <Link href={"/"} className="absolute left-20 top-20">
        🏠Home
      </Link>
      <div className={"flex flex-col justify-center items-center"}>
        <h1>Semester 1</h1>
        <div className={"flex flex-col gap-2 items-center font-bold text-4xl"}>
          <Link
            href={"/projects/eurodollarconverter"}
            className={
              "transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            }
          >
            Euro-Dollar converter
          </Link>
          <Link
            href={"/projects/shop-register-system"}
            className={
              "transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            }
          >
            Shop Register System
          </Link>
        </div>
      </div>
      <div className={"flex flex-col justify-center items-center"}>
        <h1>Semester 2</h1>
        <div className={"flex flex-col gap-2 items-center font-bold text-4xl"}>
          <Link
            href={"/projects/circustrain"}
            className={
              "transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
            }
          >
            Circus Train
          </Link>
        </div>
      </div>
    </div>
  );
}
