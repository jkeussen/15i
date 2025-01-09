"use client";

import * as Icons from "@repo/15i";
import { metadata } from "@repo/15i";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Filter object entries to only get the icon components (ends with 'Icon')
  const iconComponents = Object.entries(Icons).filter(([name]) =>
    name.endsWith("Icon"),
  );

  const getIconMetadata = (iconName: string) => {
    return metadata[iconName as keyof typeof metadata];
  };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,30px))] p-4 gap-1">
        {iconComponents.map(([name, Icon]) => {
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
    </>
  );
}
