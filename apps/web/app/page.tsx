"use client";

import * as Icons from "@repo/15i";
import { metadata, IconCategory } from "@repo/15i";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface IconGridProps {
  icons: [string, any][];
  getIconMetadata: (name: string) => any;
}

function IconGrid({ icons, getIconMetadata }: IconGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,30px))] gap-1">
      {icons.map(([name, Icon]) => {
        const iconMetadata = getIconMetadata(name);
        return (
          <Button
            variant="ghost"
            key={name}
            onClick={() => {
              console.log(name);
            }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-md w-[30px] h-[30px]">
                  <Icon />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{iconMetadata.name}</p>
              </TooltipContent>
            </Tooltip>
          </Button>
        );
      })}
    </div>
  );
}

export default function Home() {
  // Filter object entries to only get the icon components (ends with 'Icon')
  const iconComponents = Object.entries(Icons).filter(([name]) =>
    name.endsWith("Icon"),
  );

  const getIconMetadata = (iconName: string) => {
    return metadata[iconName as keyof typeof metadata];
  };

  // Group icons by category
  const categories = Array.from(
    new Set(
      iconComponents.flatMap(([name]) => {
        const meta = getIconMetadata(name);
        return meta.categories;
      }),
    ),
  ) as IconCategory[];

  const getIconsByCategory = (category: IconCategory) => {
    return iconComponents.filter(([name]) => {
      const meta = getIconMetadata(name);
      return meta.categories.includes(category);
    });
  };

  return (
    <div className="p-4 space-y-8">
      {categories.sort().map((category) => (
        <section key={category}>
          <h2 className="text-xl font-semibold capitalize mb-4">{category}</h2>
          <IconGrid
            icons={getIconsByCategory(category)}
            getIconMetadata={getIconMetadata}
          />
        </section>
      ))}
    </div>
  );
}
