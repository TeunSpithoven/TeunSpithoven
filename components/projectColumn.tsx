import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ProjectColumn(props: Props) {
  return (
    <div className={"flex flex-col w-full border dark:border-white border-black justify-center rounded-xl p-5 text-3xl select-none"}>
      <h1>{props.title}</h1>
      <div className={"flex flex-col w-full gap-2 items-left font-bold text-2xl"}>
        {props.children}
      </div>
    </div>
  );
}
