import React from "react";
import { useSelector } from "react-redux";
import * as Popover from "@radix-ui/react-popover";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Withdraw from "./Withdraw";
import AddCash from "./AddCash";
import Logout from "./Logout";

function NavbarComponent() {
  const userObject = useSelector((state) => state.auth);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none"
          aria-label="Update dimensions"
        >
          <img
            class="w-8 h-8 rounded-full"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="user photo"
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded p-3 w-[260px] bg-slate-200 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2.5">
            <ul>
              <li>
                <div className="bg-white p-2 rounded-md mb-1">
                  <p className="text-md font-semibold">{userObject.name}</p>
                  <p className="font-normal text-sm">
                    Skill Score: {userObject.skillScore}
                  </p>
                </div>
              </li>
              <li>
                <div className="bg-white p-2 rounded-md mb-1">
                  <div className="flex flex-row text-sm font-normal justify-between mb-1">
                    <div className="flex flex-row">
                      <box-icon name="wallet" size="sm" type="solid"></box-icon>
                      <p className="pl-1">My Balance</p>
                    </div>
                    <p>₹ {userObject.wallet}</p>
                  </div>
                  <div className="bg-green-200 flex flex-row justify-around text-sm px-1 py-1 rounded-md font-bold text-green-700 ">
                    <Withdraw />
                    <div className="h-[full] w-[1px] bg-green-300"></div>
                    <AddCash />
                  </div>
                </div>
              </li>
              <li>
                <div className="bg-white p-2 text-sm rounded-md mb-1">
                  <div className="flex flex-row">
                    <box-icon
                      type="solid"
                      size="sm"
                      name="dashboard"
                    ></box-icon>
                    <Link to={"/"} className="pl-1">
                      Dashboard
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="bg-white p-2 text-sm rounded-md mb-1">
                  <div className="flex flex-row">
                    <box-icon type="solid" size="sm" name="cog"></box-icon>
                    <p className="pl-1">Settings</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="bg-red-400 p-2 text-sm rounded-md mb-1 font-semibold text-center">
                  <Logout />
                </div>
              </li>
            </ul>
          </div>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default NavbarComponent;
