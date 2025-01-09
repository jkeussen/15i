import * as Icons from "@repo/15i";

export default function Home() {
  // Filter object entries to only get the icon components (ends with 'Icon')
  const iconComponents = Object.entries(Icons).filter(([name]) =>
    name.endsWith("Icon")
  );

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {iconComponents.map(([name, Icon]) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 p-2 border rounded"
        >
          <Icon />
          <span className="text-xs text-gray-600">{name}</span>
        </div>
      ))}
    </div>
  );
}
