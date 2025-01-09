import { Button } from "./ui/button";
import { Label } from "./ui/label";
import * as Icons from "@repo/15i";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Abstract = () => {
  return (
    <div>
      <Label>Abstract</Label>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,30px))] gap-2">
        <Button variant="ghost">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-md w-[30px] h-[30px]">
                <Icons.HamburgerMenuIcon />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hamburger Menu</p>
            </TooltipContent>
          </Tooltip>
        </Button>
        <Button variant="ghost">
          <Icons.Cross1Icon />
        </Button>
        <Button variant="ghost">
          <Icons.DotsHorizontalIcon />
        </Button>
        <Button variant="ghost">
          <Icons.DotsVerticalIcon />
        </Button>
        <Button variant="ghost">
          <Icons.PlusIcon />
        </Button>
        <Button variant="ghost">
          <Icons.MinusIcon />
        </Button>
        <Button variant="ghost">
          <Icons.CheckIcon />
        </Button>
        <Button variant="ghost">
          <Icons.Cross2Icon />
        </Button>
        <Button variant="ghost">
          <Icons.CheckCircledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.CrossCircledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.PlusCircledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.MinusCircledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.QuestionMarkIcon />
        </Button>
        <Button variant="ghost">
          <Icons.QuestionMarkCircledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.InfoCircledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.AccessibilityIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ExclamationTriangleIcon />
        </Button>
        <Button variant="ghost">
          <Icons.Share1Icon />
        </Button>
        <Button variant="ghost">
          <Icons.Share2Icon />
        </Button>
        <Button variant="ghost">
          <Icons.ExternalLinkIcon />
        </Button>
        <Button variant="ghost">
          <Icons.OpenInNewWindowIcon />
        </Button>
        <Button variant="ghost">
          <Icons.EnterIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ExitIcon />
        </Button>
        <Button variant="ghost">
          <Icons.DownloadIcon />
        </Button>
        <Button variant="ghost">
          <Icons.UploadIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ResetIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ReloadIcon />
        </Button>
        <Button variant="ghost">
          <Icons.UpdateIcon />
        </Button>
        <Button variant="ghost">
          <Icons.EnterFullScreenIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ExitFullScreenIcon />
        </Button>
        <Button variant="ghost">
          <Icons.DragHandleVerticalIcon />
        </Button>
        <Button variant="ghost">
          <Icons.DragHandleHorizontalIcon />
        </Button>
        <Button variant="ghost">
          <Icons.DragHandleDots1Icon />
        </Button>
        <Button variant="ghost">
          <Icons.DragHandleDots2Icon />
        </Button>
        <Button variant="ghost">
          <Icons.DotIcon />
        </Button>
        <Button variant="ghost">
          <Icons.DotFilledIcon />
        </Button>
        <Button variant="ghost">
          <Icons.CommitIcon />
        </Button>
        <Button variant="ghost">
          <Icons.SlashIcon />
        </Button>
        <Button variant="ghost">
          <Icons.CircleIcon />
        </Button>
        <Button variant="ghost">
          <Icons.CircleBackslashIcon />
        </Button>
        <Button variant="ghost">
          <Icons.Half1Icon />
        </Button>
        <Button variant="ghost">
          <Icons.Half2Icon />
        </Button>
        <Button variant="ghost">
          <Icons.ViewVerticalIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ViewHorizontalIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ViewGridIcon />
        </Button>
        <Button variant="ghost">
          <Icons.ViewNoneIcon />
        </Button>
        <Button variant="ghost">
          <Icons.SquareIcon />
        </Button>
        <Button variant="ghost">
          <Icons.CopyIcon />
        </Button>
      </div>
    </div>
  );
};

export { Abstract };
