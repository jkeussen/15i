import * as Icons from "@repo/15i";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Abstract } from "@/components/icon-groupings";

export default function Home() {
  // Filter object entries to only get the icon components (ends with 'Icon')
  const iconComponents = Object.entries(Icons).filter(([name]) =>
    name.endsWith("Icon"),
  );

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,30px))] p-4 gap-1">
        {iconComponents.map(([name, Icon]) => (
          <Tooltip key={name}>
            <TooltipTrigger>
              <div className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-md w-[30px] h-[30px]">
                <Icon />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      <Abstract />
    </>
  );
}
