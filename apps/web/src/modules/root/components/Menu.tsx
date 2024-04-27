"use client";
import * as Popover from "@radix-ui/react-popover";

import ButtonAction from "@/modules/ui/components/Button/ButtonAction";
import Profile from "@/public/profile.jpeg";
import { IconMenu } from "@tabler/icons-react";
import Image from "next/image";

const Menu = () => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <ButtonAction size="lg" shape="pill" className="pl-1 pt-1 pb-1 pr-2" iconRight={IconMenu}>
          <Image src={Profile} width={32} alt="Profile Picture" className="rounded-full h-full" />
        </ButtonAction>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          sideOffset={5}
          align="end"
          className="bg-surface-primary border rounded-lg border-border-primary border-b-2"
        >
          <ul className="space-y-2">
            <li>
              <a href="/" className="block px-4 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="/archive" className="block px-4 py-2">
                Archive
              </a>
            </li>
          </ul>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Menu;
