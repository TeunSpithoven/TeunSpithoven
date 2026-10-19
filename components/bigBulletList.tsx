export default function BigBulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-col gap-4 pl-8 text-xl md:text-2xl">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
