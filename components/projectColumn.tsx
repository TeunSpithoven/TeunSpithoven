import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function ProjectColumn(props: Props) {
  return (
    <div className={"flex flex-col justify-center items-start"}>
      <h1>{props.title}</h1>
      <div className={"flex flex-col gap-2 items-left font-bold text-4xl"}>
        {props.children}
      </div>
    </div>
  );
}
