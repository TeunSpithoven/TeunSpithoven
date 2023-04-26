export default function ProjectColumn(props: any) {
  return (
    <div className={"flex flex-col justify-center items-center"}>
      <h1>{props.title}</h1>
      <div className={"flex flex-col gap-2 items-center font-bold text-4xl"}>
        {props.children}
      </div>
    </div>
  );
}
