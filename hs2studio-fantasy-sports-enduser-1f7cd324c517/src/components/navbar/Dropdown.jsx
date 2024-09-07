import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="font-medium flex items-center text-lg transition-colors hover:text-violet-700 outline-none"
          aria-label="Customise options"
        >
          Sports
          <MdKeyboardArrowDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] bg-white rounded-md p-[5px] shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="p-3 text-gray-800 hover:text-violet-700 text-sm">
            <Link to={"/"}>All Sports</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
          <DropdownMenu.Item className="px-3 py-2 text-gray-800 hover:text-violet-700 text-sm">
            <Link to={"/66064f6e7d9bfc89e22d96e7"}>Cricket</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-3 py-2 text-gray-800 hover:text-violet-700 text-sm">
            <Link to={"/66064fcd7d9bfc89e22d96ec"}>Football</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-3 py-2 text-gray-800 hover:text-violet-700 text-sm">
            <Link to={"/66064fdc7d9bfc89e22d96ed"}>Volleyball</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="px-3 py-2 text-gray-800 hover:text-violet-700 text-sm">
            <Link to={"/66064ff67d9bfc89e22d96ee"}>BasketBall</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
