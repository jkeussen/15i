"use client";

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

export default function IconGrid({ icons, getIconMetadata }: IconGridProps) {
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
